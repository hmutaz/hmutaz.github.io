"use client"
import Image from "next/image";
import { MutableRefObject, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Home() {
  const projects = useRef() as MutableRefObject<HTMLDivElement>
  const [opacity, setOpacity] = useState("opacity-0")
  const [pos, setPos] = useState("translate-y-0")
  const [linkState, setLinkState] = useState("inactive-link")

  const handleClickName = () => {
    if (opacity == "opacity-0"){
      setOpacity("opacity-100")
      setPos("-translate-y-32")
      setLinkState("")
    } else {
      setOpacity("opacity-0")
      setPos("translate-y-0")
      setLinkState("inactive-link")
    }
  }

  const handleClickToProject = () => {
    projects.current.scrollIntoView({behavior: "smooth"})
  }

  return (  
    <div className="snap-mandatory snap-y overflow-y-scroll h-screen">
      <div className="snap-always snap-center min-h-screen flex flex-col items-center justify-center gap-64 relative">
        <p onClick={handleClickName} className={"z-10 absolute top-1/2 cursor-pointer transition-all duration-700 text-2xl hover:text-3xl "+pos}>Hudzaifah Al Mutaz Billah</p>
        <p onClick={handleClickToProject} className={"absolute bottom-4 transition-all duration-300 "+opacity}>Test</p>
        <div className={"flex gap-10 transition-all duration-700 "+opacity}>
          <a target="_blank" className={"bg-[#2b3137] px-4 py-2 rounded-lg border-2 border-[#dcdcdc] "+linkState} href="https://github.com/hmutaz">Github</a>
          <a target="_blank" className={"bg-[#0a66c2] px-4 py-2 rounded-lg border-2 border-[#dcdcdc] "+linkState} href="https://www.linkedin.com/in/hudzaifah-al-mutaz-billah/">LinkedIn</a>
        </div>
      </div>
      <div ref={projects} className="snap-always snap-center min-h-screen">
        Projects
      </div>
    </div>
  );
}
