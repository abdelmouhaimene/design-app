import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
const Phone = () => {
  return (
    <Link href="/" className='flex-between gap-x-2 transition-all duration-300 hover:text-rose'>
        <FaPhoneAlt className='text-2xl animate-bounce'/>
        <p className='font-work-sans font-medium text-xl '>
            +1-332-228-0460
        </p>
    </Link>
  )
}

export default Phone