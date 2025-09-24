import Image from "next/image";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  // ovde fetch pa pass down to components
  const projects = await client.fetch(
    `*[_type == "project"]{"title":title,"img":image.asset->url,"link":link,"stack":{"image":image.asset->url,"title":title}}`
  );
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
