import React from 'react'

function Carts({element}) {
    return (
        <div key={element.id} className='border-4 border-gray-100'>
            <div className='bg-gray-200  h-[60%]'>
                <img className='w-4/5 mx-auto py-5 px-2 h-[100%] hover:rotate-12 duration-700 hover:scale-125 hover:-mt-2 xl:w-1/2 xl:px-0' src={element.img} alt="" />
            </div>
            <div className='flex items-center justify-center flex-col  sm:gap-0 md:gap-0'>
                <h4 className='text-center text-xl pt-3'>{element.name}</h4>
                <p className='text-center pt-0 pb-0 xl:flex'>S/ <span>{element.price}</span></p>
                <a href={`https://wa.me/51969721673?text=Welcome%20to%20Bravio%0AName%3A%20${element.name}%0Aprice%3A%20${element.price}`} target='_blank' className=' cursor-pointer text-xs flex mx-auto mt-1 mb-4 border-1 rounded-lg bg-gray-100 w-max px-3 py-1 sm:mb-5 lg:mb-2'>buy now..</a>
            </div>
        </div>
    )
}

export default Carts