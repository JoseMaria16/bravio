import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const data = [
    {
        img: '../gorros/home/1.png',
        name: 'White Hat',
        price: 54,
        id: 1,
        path: '/camana'
    },
    {
        img: '../gorros/home/2.png',
        name: 'White Hat',
        price: 54,
        id: 2,
        path: '/caballos'
    },
    {
        img: '../gorros/home/3.png',
        name: 'White Hat',
        price: 54,
        id: 3,
        path: '/gallos'
    },
    {
        img: '../gorros/home/4.png',
        name: 'White Hat',
        price: 54,
        id: 4,
        path: '/gallos'
    },
    {
        img: '../gorros/home/5.png',
        name: 'White Hat',
        price: 54,
        id: 5,
        path: '/toros'
    },
    {
        img: '../gorros/home/6.png',
        name: 'White Hat',
        price: 54,
        id: 6,
        path: '/gallos'
    },
]

function BestSellers() {
    const list = {
        visible: { opacity: 1, y: -200 },
        hidden: { opacity: 0, duration: 1 },
    }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={list}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration:1 }}
    className='h-max'>
            <div className="info text-center relative pt-32 pb-24">
                <h2 className='uppercase text-[70px] opacity-10 font-bold md:text-[60px] lg:text-8xl xl:text-9xl lg:tracking-widest   '>PRODUCT</h2>
                <h2 className='font-bold text-4xl -mt-[4.4rem] md:mt-[-4rem] xl:text-6xl xl:-mt-[5rem]'>best sellers</h2>
                <h3 className='uppercase font-semibold'>products</h3>
            </div>
            
            <div className='flex sm:flex-col lg:flex-row'>
                <img className='lg:w-[60%] hover:rotate-6 duration-300 hover:scale-90 h-1/2 -mt-10 sm:w-[70%] mx-auto md:[40%]' src="../gorro1.png" alt="" />
            <div className='grid sm:grid-cols-2 h-max mt-0 sm:w-[100%] sm:px-5 md:grid-cols-3 lg:grid-cols-3 lg:w-[60%] mx-auto gap-3 xl:w-[80%]'>
            {data.map((element) => (
                <div key={element.id} className='border-4 border-gray-100'>
                    <div className='bg-gray-200  h-[60%]'>
                    <img className='w-2/3 mx-auto py-5 px-2 h-[100%] hover:rotate-12 duration-700 hover:scale-125 hover:-mt-2 xl:w-1/2 xl:px-0' src={element.img} alt="" />
                    </div>
                    <div className='flex items-center justify-center  sm:gap-0 md:gap-10'>
                    <h4 className='text-center text-xl pt-3'>{element.name}</h4>
                    <p className='text-center pt-1 pb-0 sm:hidden xl:flex'>$<span>{element.price}</span></p>
                    </div>
                    <div className='justify-center items-center flex'>
                    <Link to={element.path} about='see more' title='see more..' className='text-xs mx-auto mt-2 border-1 mb-0 rounded-lg bg-gray-100 w-max px-3 py-1'>see more</Link>
                    </div>

                </div> 
            ))}
            </div>
            </div>
        </motion.div>
  )
}

export default BestSellers