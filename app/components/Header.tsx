import Link from 'next/link'
import Image from 'next/image' // Import Image component from Next.js
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image 
            src="/f.png"  
            alt="logo"               
            width={70}                   
            height={70}                   
          />
        </Link>
        <h1>Faqeha's Blog</h1>
      </div>
      <Link href="https://www.linkedin.com/in/faqeha-noor-2b5a4a254/" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center roun'>
      For More Follow me on LinkedIn     
      </Link>
    </header>
  )
}
