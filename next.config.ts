import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 type-checks every `<Link href>` against the routes that actually
  // exist. Nav/footer links already point at /collections, /bespoke, … which
  // are only created in build-order steps 4-7, so route typing is off until
  // those segments land. Re-enable (delete this line) once they do.
  typedRoutes: false,
};

export default nextConfig;
