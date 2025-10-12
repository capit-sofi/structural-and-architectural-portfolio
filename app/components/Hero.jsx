"use client"
import React from 'react'
import Image from 'next/image';
import profile from '../../public/portfolio.png'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4'>
        <div className='rounded-full bg-[#1f1f1f] w-[300px] h-[300px] relative'>
            <Image src={profile} alt='profile image' className='rounded-full cursor-pointer hover:w-100 transition-all delay-300 duration-300 ease-in-out  w-65 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 '> Hi I'm Sofoniyas Alemu</h3>
        <div className='text-2xl sm:text-6xl lg:text-[55px] font-bold'>
           <TypeAnimation
           sequence={
            [
                "Structural-Engineer",1000,
                " Architectural-Designer",1000,
                "Quantity-Surveyor(QS)",1000,
                "Project-Manager",1000,

            ]
           }
           wrapper='span'
           speed={50}
           repeat={Infinity}
           
           />
        </div>
        <p className='text-gray-400 max-w-2xl mx-auto '>
            Structural-Designer( structural-Engineer) with a 5 years of experience in etabs,sap2000,safe,csiBridge,
            A Quantity Surveyor (QS) with also 5 years of experience of preparing takeoff,BOQ,Bar-Bending Schedule (BBS) and
            Architectural Designer with 5 years of experience in Revit,ArchiCad,Rhino-3d and rendering (Enscap, D5, lumion, unrealEngine,TwinMotion).

        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="" className='px-10 py-3 rounded-full border border-white bg-[#1f1f1f] text-white flex items-center gap-2 '>Contact Me</a>
             <a href="https://drive.google.com/file/d/1qRuuk7K07EfWNtMLaaqIPChsu34XfLFG/view?usp=drive_link" className='px-10 py-3 rounded-full border border-gray-500 bg-[#1f1f1f] text-white flex items-center gap-2 '>My Resume</a>
        </div>
    </div>
  )
}

export default Hero