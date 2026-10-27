import { About } from "@/components/About";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Edge } from "@/components/Edge";
import { Experience } from "@/components/Experience";
import { Flow } from "@/components/Flow";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { PWA } from "@/components/PWA";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Stats } from "@/components/Stats";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Nav />
      <PWA />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Flow />
        <Edge />
        <About />
        <Experience />
        <Cases />
        <Projects />
        <Skills />
        <AIWorkflow />
        <Contact />
      </main>
    </>
  );
}
