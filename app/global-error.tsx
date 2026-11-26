"use client";
export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          background: "#fff8e9",
          color: "#174c39",
          fontFamily: "Arial,sans-serif",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <main style={{ textAlign: "center", padding: 32, maxWidth: 640 }}>
          <p style={{ fontSize: 18, fontWeight: 800 }}>babi. JUS</p>
          <h1
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(40px,8vw,80px)",
              fontWeight: 400,
            }}
          >
            Une petite pause imprévue.
          </h1>
          <p>Le site rencontre une difficulté. Réessaie dans un instant.</p>
          <button
            onClick={() => retry()}
            style={{
              padding: "16px 30px",
              border: 0,
              borderRadius: 30,
              background: "#174c39",
              color: "#fff8e9",
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
          <p>
            <a href="/" style={{ color: "inherit" }}>
              Retour à l’accueil
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
