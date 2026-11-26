import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
const config: NextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};
export default config;
