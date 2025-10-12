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
🏗️ I’m a Professional Civil Engineer. I am proactive with high capacity to work under pressure. High level of creativity and initiative. I have 💼 more than 5 years of experience working in structural-design, architectural- design, Quantity Surveyor (QS), Construction Project Management. I have developed concrete / steel / wood / masonry structure project... 
                </p>
               
             <button onClick={()=> setRead(!read)} className=' hover:text-[#5cc389] px-1 py-1 justify-center max-w-25 text-center cursor-pointer rounded-full border text-sm border-white bg-[#1f1f1f] text-white flex items-center gap-2 '>Read-More</button>
              {read && <div className=' w-full md:w-[50%] min-h-full rounded-3xl absolute justify-center m-auto align-middle bg-blue-50'>
                <div onClick={()=> setRead(!read)} className='right-0 p-4 '><XMarkIcon className=' hover:w-8 hover:h-8 transition-all delay-200 duration-300 ease-in-out h-6 w-6 text-black border border-black rounded' /></div>
                <div className='text-black text-sm justify-center p-10'>
                    <p className=''><span>My name is Sofoniyas Alemu. </span><br/>
                       🏗️ I’m a Professional Civil Engineer. I am proactive with high capacity to work under pressure. High level of creativity and initiative. I have 💼 more than 5 years of experience working in structural-design, architectural- design, Quantity Surveyor (QS), Construction Project Management. I have developed concrete / steel / wood / masonry structure project. Also, I specialize in remote construction project coordination, estimating, and admin/operational support, and have a strong portfolio. I’ve worked directly with developers, general contractors, engineers, and subcontractors to keep projects running smoothly from pre-construction to close-out. <br/>
                       🔧 Core Services I Offer: -<br/>
                        - structural design (concrete, steel and timber structures)<br/>
                        - 2D Drawings (Floor plans, Foundations, Elevations, Sections, Details, Connections)<br/>
                        - 3D Modeling andRendering<br/> - Technical documents for Project Engineering (structural report) All this by using the following software: - <br/>
                       -Architectural drawings (Revit, ArchiCAD, Rhino 3d)<br/>
                       -Rendering (Endcap, d5, Lumion, twin motion, unreal engine) <br/>
                        Construction Project Management (remote coordination + site team support) - Buildertrend / CoConstruct / JobTread setup & admin - Quantity & Material Take-Offs (QTOs) - Budgeting, Estimating & Bid Preparation - Subcontractor Coordination & Communication - Scheduling (MS Project, Asana, Procore, Primavera P6) - Technical Writing & Scope Development - Owner Representation & Warranty Coordination.<br/>
                        Experience working with clients across Africa, Europe and middle-east. If you're looking for someone who can jump in with minimal ramp-up, streamline your construction operations, and bring technical insight along with practical experience, I’d be happy to chat. Let’s build something great together.
                    </p>
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