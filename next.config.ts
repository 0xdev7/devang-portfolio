import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ship the CSS inside the HTML. Firefox paints before a separate stylesheet
    // arrives on a cold load, which flashed the raw, unstyled page.
    inlineCss: true,
  },
};

export default nextConfig;
