import React from 'react'
import { motion } from 'framer-motion'

function Inicio() {
  const list = {
    visible: { opacity: 1, y: 20 },
    hidden: { opacity: 0, duration: 5 },
}
  return (
    <motion.div
     className='lg:flex lg:justify-between lg:px-16 xl:px-40'
     initial="hidden"
     animate="visible"
     variants={list}
     transition={{ delay: .1, duration: 2 }}
     >
      <div className="info sm:text-center sm:mt-14 lg:w-[50%] lg:text-start">
        <h2 className='sm:text-5xl lg:mt-7 lg:text-7xl xl:text-[5.5rem]  font-light'>Welcome to</h2>
        <h1 className='sm:text-6xl lg:text-8xl font-bold mb-3 opacity-50'>BRAVÍO</h1>
        <p className='px-6 sm:px-[10%] lg:px-0 lg:w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, officia, ipsa hic ab voluptates iusto numquam sequi deleniti alias aspernatur a</p>
        <p className='text-2xl font-semibold hidden lg:flex gap-4'><span className='text-2xl font-medium'>CEO: </span>Breyson Riega</p>
      </div>
      <div className="imgs relative hover:scale-125 duration-300">
        <img className='w-[200px] md:w-[300px] mx-auto lg:w-[400px] lg:mr-32' src="../gorro.png" alt="" />
      </div>
    </motion.div>
  )
}

export default Inicio