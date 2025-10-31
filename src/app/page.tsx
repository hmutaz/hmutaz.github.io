"use client"
import Project from "@/components/Project";
import Image from "next/image";
import { projects as data } from "@/static/ProjectData";
import { MutableRefObject, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Home() {
  const projects = useRef() as MutableRefObject<HTMLDivElement>
  const [opacity, setOpacity] = useState("opacity-0")
  const [pos, setPos] = useState("translate-y-0")
  const [linkState, setLinkState] = useState("inactive-link")
  const [overflow, setOverflowState] = useState("overflow-y-hidden")

  const handleClickName = () => {
    if (opacity == "opacity-0"){
      setOpacity("opacity-100")
      setPos("-translate-y-32")
      setLinkState("")
      setOverflowState("overflow-y-scroll")
    } else {
      setOpacity("opacity-0")
      setPos("translate-y-0")
      setLinkState("inactive-link")
      setOverflowState("overflow-y-hidden")
    }
  }

  const handleClickToProject = () => {
    projects.current.scrollIntoView({behavior: "smooth"})
  }

  return (  
    <div className={"snap-mandatory snap-y h-screen " + overflow}>
      <div className="snap-always snap-center min-h-screen flex flex-col items-center justify-center gap-64 relative">
        <p onClick={handleClickName} className={"z-10 absolute top-1/2 cursor-pointer transition-all duration-700 text-2xl hover:text-3xl "+pos}>Hudzaifah Al Mutaz Billah</p>
        <div onClick={handleClickToProject} className={"absolute text-center flex flex-col bottom-4 transition-all duration-300 gap-0 hover:gap-2 "+opacity}>
          <p>Projects</p>
          <p>▼</p>
        </div>
        <div className={"flex gap-10 transition-all duration-700 "+opacity}>
          <a target="_blank" className={"bg-[#2b3137] px-4 py-2 rounded-lg border-2 border-[#dcdcdc] "+linkState} href="https://github.com/hmutaz">Github</a>
          <a target="_blank" className={"bg-[#dcdcdc] px-4 py-2 rounded-lg border-2 border-[#010101] text-[#dcdcdc]"+linkState} href="https://drive.google.com/file/d/1qil4l60mRqzkKtRHcCbLMCG4woDbsKXU/view?usp=sharing">Curriculum Vitae</a>
          <a target="_blank" className={"bg-[#0a66c2] px-4 py-2 rounded-lg border-2 border-[#dcdcdc] "+linkState} href="https://www.linkedin.com/in/hudzaifah-al-mutaz-billah/">LinkedIn</a>
        </div>
      </div>
      <div ref={projects} className="snap-always snap-start min-h-screen p-12">
        <p className="text-3xl font-bold ml-auto mr-auto max-w-fit">Projects</p>
        <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-20 px-36 mb-12">
          {data.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              image={project.image}
              desc={project.desc}
              hlink={project.hlink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
