"use client"
import React from 'react'
import Image from 'next/image';
import profile from '../../public/portfolio.jpg'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4'>
          <div className="w-75 h-75 rounded-full overflow-hidden">
  <Image
    src={profile}
    alt="Profile"
    width={300}
    height={300}
    priority
    className="w-full h-full object-cover rounded-full brightness-85 transition-transform duration-300 hover:scale-110"
  />
</div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 '> Hi I'm Sofoniyas Alemu</h3>
            <div className='text-2xl sm:text-6xl lg:text-[55px] font-bold'>
                <TypeAnimation
                    sequence={
                        [
                            "Structural-Engineer", 1000,
                            "BIM Specialist", 1000,
                            " Architectural-Designer", 1000,
                            "Quantity-Surveyor(QS)", 1000,
                            "Project-Manager", 1000,

                        ]
                    }
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}

                />
            </div>
            <p className="max-w-2xl mx-auto text-gray-400 text-justify leading-6">
  Structural Engineer | BIM Specialist | Quantity Surveyor | Architectural Designer

  I am a multidisciplinary engineering professional specializing in structural design, Building Information Modeling (BIM), quantity surveying, and architectural design. I deliver efficient, accurate, and buildable solutions from concept through construction by combining engineering expertise with modern digital workflows.

  My experience includes structural analysis and design, BIM modeling, construction documentation, quantity takeoff, BOQ preparation, reinforcement detailing (BBS), project coordination, and high-quality architectural visualization. I am committed to producing practical, code-compliant, and cost-effective designs that support successful project delivery.
</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="" className='px-10 py-3 rounded-full border border-white bg-[#1f1f1f] text-white flex items-center gap-2 '>Contact Me</a>
                <a href="https://drive.google.com/file/d/1UGLrdDY7uvBk1mY77tSJtl21jEMJ3fVc/view?usp=drive_link" className='px-10 py-3 rounded-full border border-gray-500 bg-[#1f1f1f] text-white flex items-center gap-2 '>My Resume</a>
            </div>
        </div>
    )
}

export default Hero