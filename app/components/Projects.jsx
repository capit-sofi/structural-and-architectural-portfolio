"use client";
import React, { useRef, useState } from 'react'
import { PROJECTS_DATA } from '../data'
import Link from 'next/link'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import { useInView, motion } from 'framer-motion';

function Projects() {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInview = useInView(ref, {once:true})
    const cardVariants = {
        initial:{y:50, opacity:0},
        animate:{y:0, opacity:1}
    }
    const filteredProjects = PROJECTS_DATA.filter((project) => project.tag.includes(tag))
  return (
    <section id='projects' className='container mt-10 mx-auto px-12 py-4'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:nb-12'>My Project</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            {["All","Structural","Architectural"].map((tagName)=> (
                <button key={tagName} className={`${tag === tagName ? "text-white border-[#00adb5]  " : "text=[#adb7be] border-slate-600 hover:border-white"} rounded-full border-2 px-6 py-2 text-base cursor-pointer`} onClick={()=> setTag(tagName)}>{tagName}</button>
            ))}
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 '>
            {filteredProjects.map((project, index)=>(
                <motion.li key={index} variants={cardVariants} initial="initial" animate={isInview ? "animate":"initial" }transition={{duration:0.3,delay: index*0.4}}>
                    <div>
                        <div className='h-52 md:h-72 rounded-t-xl relative group' style={{
                            backgroundImage:`url(${project.image})`,
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                            backgroundSize:"cover"
                        }}>
                            <div className='overlay items-center  justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 group-hover:flex hidden group-hover:bg-[#181818] transition-all duration-500'>
                              <Link href={project.gitUrl} className='pr-2'>
                              <CodeBracketIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2  transform -traslate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                              </Link>
                               <Link href={project.previewUrl} className='pl-2'>
                              <GlobeAltIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2  transform -traslate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
                              </Link>
                            </div>
                        </div>
                        <div className='text-white rounded-b-xl  mt-2  bg-[#181818] py-6 px-4'>
                            <h5 className='text-xl font-semibold mb-2'>{project.title}</h5>
                            <p className='text-[#abd7be] text-base'>{project.description}</p>

                        </div>
                    </div>

                </motion.li>
            ))}
        </ul>

    </section>
  )
}

export default Projects