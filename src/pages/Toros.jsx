import React from 'react'
import toros from './data/toros'
import Heading from './components/widgets/Heading'
import Carts from './components/widgets/Carts'

function Toros() {
  return (
    <div>
      <Heading name='Toros' />
      <div className='grid sm:grid-cols-2 h-max mt-0 sm:w-[100%] sm:px-5 md:grid-cols-3 lg:grid-cols-3 lg:w-[60%] mx-auto gap-3 xl:w-[80%] xl:grid-cols-4'>
        {toros.map((element) => (
          <Carts element={element} />
        ))}
      </div>
    </div>
  )
}

export default Toros