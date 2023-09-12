import React from 'react'

function Heading({name}) {
  return (
    <div className="info text-center relative sm:mt-64 lg:mt-64 pb-6">
                <h2 className='uppercase text-[70px] opacity-10 font-bold md:text-[60px] lg:text-8xl xl:text-8xl lg:tracking-widest   '>PRODUCT</h2>
                <h2 className='font-bold text-4xl -mt-[4.4rem] md:mt-[-4rem] xl:text-6xl xl:-mt-[5rem] opacity-50'>{name}</h2>
                <h3 className='uppercase font-semibold'>products</h3>
     </div>
  )
}

export default Heading