"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Rotate3D, X } from "lucide-react";
import { Product, productImage, asset } from "@/lib/products";
export default function BottleViewer({ product: p }: { product: Product }) {
  const [enabled, setEnabled] = useState(false),
    [ready, setReady] = useState(false),
    [failed, setFailed] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null),
    holder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!enabled || !canvas.current) return;
    let stopped = false,
      cleanup = () => {};
    setFailed(false);
    setReady(false);
    Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
    ])
      .then(async ([T, { GLTFLoader }]) => {
        if (stopped || !canvas.current || !holder.current) return;
        const renderer = new T.WebGLRenderer({
          canvas: canvas.current,
          alpha: true,
          antialias: true,
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
        const scene = new T.Scene(),
          camera = new T.PerspectiveCamera(32, 1, 0.1, 25);
        camera.position.set(0, 0.05, 6);
        scene.add(new T.HemisphereLight(0xffffff, 0x72876d, 2));
        const light = new T.DirectionalLight(0xffffff, 3);
        light.position.set(3, 5, 6);
        scene.add(light);
        let object: import("three").Group | undefined;
        let frame = 0,
          drag = false,
          lastX = 0,
          angle = 0;
        const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
        const resize = () => {
          const el = holder.current;
          if (!el) return;
          renderer.setSize(el.clientWidth, el.clientHeight, false);
          camera.aspect = el.clientWidth / el.clientHeight;
          camera.updateProjectionMatrix();
        };
        const ro = new ResizeObserver(resize);
        ro.observe(holder.current);
        resize();
        const el = canvas.current;
        const down = (e: PointerEvent) => {
          drag = true;
          lastX = e.clientX;
          el.setPointerCapture(e.pointerId);
        };
        const move = (e: PointerEvent) => {
          if (drag) {
            angle += (e.clientX - lastX) * 0.012;
            lastX = e.clientX;
          }
        };
        const up = () => {
          drag = false;
        };
        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);
        const dispose = () => {
          object?.traverse((o) => {
            if (o instanceof T.Mesh) {
              o.geometry.dispose();
              for (const m of Array.isArray(o.material)
                ? o.material
                : [o.material]) {
                for (const v of Object.values(m))
                  if (v instanceof T.Texture) v.dispose();
                m.dispose();
              }
            }
          });
        };
        cleanup = () => {
          cancelAnimationFrame(frame);
          ro.disconnect();
          dispose();
          renderer.dispose();
          el.removeEventListener("pointerdown", down);
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerup", up);
          el.removeEventListener("pointercancel", up);
        };
        try {
          const gltf = await new GLTFLoader().loadAsync(asset(p.model));
          object = gltf.scene;
          if (stopped) {
            dispose();
            return;
          }
          object.position.y = -1.225;
          scene.add(object);
          setReady(true);
          const tick = () => {
            frame = requestAnimationFrame(tick);
            if (document.hidden) return;
            if (object) {
              if (!drag && !reduced) angle += 0.0015;
              object.rotation.y = angle;
            }
            renderer.render(scene, camera);
          };
          tick();
        } catch {
          if (!stopped) setFailed(true);
        }
      })
      .catch(() => {
        if (!stopped) setFailed(true);
      });
    return () => {
      stopped = true;
      cleanup();
    };
  }, [enabled, p.model]);
  return (
    <div className="bottle-viewer" ref={holder}>
      <div className={`product-photo ${ready && !failed ? "is-hidden" : ""}`}>
        <Image
          src={productImage(p)}
          alt={`BABI JUS ${p.name}`}
          width={900}
          height={1350}
          priority
          sizes="(max-width:767px) 70vw,45vw"
          unoptimized={!p.photoWeb}
        />
      </div>
      {enabled && (
        <canvas
          ref={canvas}
          aria-label={`Vue 3D de la bouteille ${p.name} ; glisser pour la faire tourner`}
          onKeyDown={(e) => {
            if (e.key === "Escape") setEnabled(false);
          }}
        />
      )}
      <div className="viewer-controls">
        {!enabled ? (
          <button onClick={() => setEnabled(true)}>
            <Rotate3D size={16} /> Voir la bouteille à 360°
          </button>
        ) : (
          <button
            onClick={() => {
              setEnabled(false);
              setReady(false);
            }}
          >
            <X size={16} /> Revenir à la photo
          </button>
        )}
      </div>
      <p className="viewer-status" role="status">
        {failed
          ? "La vue 3D n’est pas disponible. Le visuel reste accessible."
          : enabled && !ready
            ? "La bouteille arrive…"
            : ready
              ? "Fais glisser pour tourner la bouteille."
              : ""}
      </p>
    </div>
  );
}
