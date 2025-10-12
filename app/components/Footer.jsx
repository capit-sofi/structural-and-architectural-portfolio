import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#1f1f1f] text-white py-6 text-center'>
        <div className='container mx-auto px-6'>
            <p className='text-[#abd7be] text-sm'>
                 {new Date().getFullYear()}.All Rights Reserved.
            </p>

        </div>

    </footer>
  )
}

export default Footer