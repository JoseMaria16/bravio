import React from 'react'
import toros from './data/toros'
import Heading from './components/widgets/Heading'
import Carts from './components/widgets/Carts'
import { motion } from 'framer-motion'


function Toros() {
  
  const list = {
    visible: { opacity: 1, y: -270 },
    hidden: { opacity: 0.5, duration: 1},
  }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={list}
    viewport={{ once: true }}
    transition={{ delay: 0, duration:1 }}
    >
          <Heading name='Caballos'/>
            <div className='grid sm:grid-cols-2 h-max mt-0 sm:w-[100%] sm:px-5 md:grid-cols-3 lg:grid-cols-3 lg:w-[60%] mx-auto gap-3 xl:w-[80%] xl:grid-cols-4'>
            {toros.map((element) => (
                <Carts element={element} />
            ))}
            </div>
            {/* <Footer /> */}
    </motion.div>
  );
}

export default Toros
