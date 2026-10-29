import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Devang Parekh — Front-End Lead & Full-Stack Engineer",
    short_name: "Devang",
    description: "Front-End Team Lead & full-stack engineer — fintech, Web3, trading and AI-augmented engineering.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#05070d",
    theme_color: "#05070d",
    categories: ["business", "portfolio"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Projects", url: "/#projects" },
      { name: "Experience", url: "/#experience" },
      { name: "Contact", url: "/#contact" },
    ],
  };
}
