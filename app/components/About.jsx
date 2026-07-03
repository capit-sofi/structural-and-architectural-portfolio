"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import about from '../../public/About1.png'
import {XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid'
import { TAB_DATA } from '../data'
import { motion } from 'framer-motion'



function About() {
    const [read, setRead] = useState(false)
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })

    }
  return (
    <section id='about' className='  container mt-10 mx-auto px-12 py-4 '>
        <div className='md:grid relative md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:0.5}} >
                <Image src={about} width={500} height={400} alt='about image' className='rounded-3xl hover:scale-105 transition-all delay-250 duration-300 ease-in-out'/>
            </motion.div>
            <div className='mt-4 md:mt-0  text-left flex flex-col h-full '>
                <h2 className='text-4xl font-bold text-white mb-4 '>About Me</h2>
                <p className='text-base lg:text-sm pb-2'>
                    My name is Sofoniyas Alemu. 
🏗️ I’m a Professional Civil Engineer. I am proactive with high capacity to work under pressure. High level of creativity and initiative. I have 💼 a years of experience working in structural-design, architectural- design, Quantity Surveyor (QS), Construction Project Management. I have developed concrete / steel / wood / masonry structure project... 
                </p>
               
             <button onClick={()=> setRead(!read)} className=' hover:text-[#5cc389] px-1 py-1 justify-center max-w-25 text-center cursor-pointer rounded-full border text-sm border-white bg-[#1f1f1f] text-white flex items-center gap-2 '>Read-More</button>
              {read && <div className=' w-full md:w-[50%] min-h-full rounded-3xl absolute justify-center m-auto align-middle bg-blue-50'>
                <div onClick={()=> setRead(!read)} className='right-0 p-4 '><XMarkIcon className=' hover:w-8 hover:h-8 transition-all delay-200 duration-300 ease-in-out h-6 w-6 text-black border border-black rounded' /></div>
                <div className="max-w-5xl mx-auto px-6 py-10 text-gray-700 leading-8">
  <div className="text-justify space-y-6 z-50">

    <p>
      <span className="font-semibold text-lg">My name is Sofoniyas Alemu.</span>
      <br /><br />
      🏗️ <strong>Professional Civil & Structural Engineer | BIM Specialist | Quantity Surveyor | Architectural Designer</strong>
    </p>

    <p>
      I am a multidisciplinary Civil and Structural Engineer with expertise in structural engineering,
      Building Information Modeling (BIM), architectural design, quantity surveying, and construction
      project management. I deliver innovative, practical, and cost-effective engineering solutions
      that bridge design excellence with construction efficiency.
    </p>

    <p>
      With extensive experience across residential, commercial, industrial, and infrastructure
      projects, I have successfully designed reinforced concrete, structural steel, timber,
      masonry, and bridge structures while supporting projects from concept development through
      construction and final delivery. I combine engineering knowledge with modern digital
      workflows to produce accurate, code-compliant, and buildable designs.
    </p>

    <p>
      In addition to design, I specialize in remote construction project coordination, estimating,
      quantity surveying, BIM coordination, and operational support. I have collaborated with
      developers, architects, contractors, consultants, and subcontractors across Africa, Europe,
      and the Middle East, helping deliver projects efficiently while maintaining quality,
      schedule, and budget objectives.
    </p>

    <h3 className="text-xl font-semibold mt-8">Core Services</h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>Structural Analysis & Design (Concrete, Steel, Timber & Masonry)</li>
      <li>Building Information Modeling (BIM)</li>
      <li>Structural Detailing & Construction Documentation</li>
      <li>Quantity Takeoff (QTO), BOQ & Bar Bending Schedule (BBS)</li>
      <li>Architectural Design & 3D Modeling</li>
      <li>Construction Project Management & Remote Coordination</li>
      <li>Cost Estimating & Bid Preparation</li>
      <li>Technical Reports & Engineering Documentation</li>
      <li>BIM Coordination & Clash Detection</li>
      <li>Architectural Visualization & Photorealistic Rendering</li>
    </ul>

  </div>
</div>
             </div>}
             <div className='flex flex-row justify-start mt-8 '>
                {TAB_DATA.map(({id, title})=>(
                    <button key={id} onClick={()=>handleTabChange(id)}>
                        <p className={`mr-3 font-semibold cursor-pointer hover:text-white ${tab === id ? "text-white" : "text-[#5cc389]"}`}>{title}</p>
                    </button>
                ))}
             </div>
             <div className='mt-6 '>
                <ul className='list-disc pl-2 text-base'>
                    {TAB_DATA.find((t)=> t.id === tab)?.content.map(
                        (item,index) =>(
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
             </div>
            </div>
          
           
            
           
        </div>

       
    </section>
  )
}

export default About