import React from 'react'

const data = [
    {
        img: '../gorros/home/featured-1.png',
        name: 'White Hat',
        price: 54,
        id:1
    },
    {
        img: '../gorros/home/featured-2.png',
        name: 'White Hat',
        price: 54,
        id: 2
    },
    {
        img: '../gorros/home/featured-3.png',
        name: 'White Hat',
        price: 54,
        id: 3
    },
    {
        img: '../gorros/home/featured-4.png',
        name: 'White Hat',
        price: 54,
        id: 4
    }
]


function Featured() {
    return (
        <div>
            <div className="info text-center relative py-14">
                <h2 className='uppercase text-[40px] opacity-10 font-bold md:text-[60px] lg:text-8xl xl:text-9xl lg:tracking-widest   '>Recomendados</h2>
                <h2 className='font-bold text-4xl -mt-14 md:mt-[-4rem] xl:text-6xl xl:-mt-[5rem]'>featured</h2>
                <h3 className='uppercase font-semibold'>products</h3>
            </div>
            <div className='grid sm:grid-cols-2 w-[100%] sm:px-5 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 xl:w-[90%]'>
            {data.map((element) => (
                <div key={element.id} className='border-4 border-gray-100 flex flex-col justify-between '>
                    <div className='bg-gray-200 h-[60%]'>
                    <img className='w-3/4 mx-auto py-7 h-[100%] hover:rotate-12 duration-700 hover:scale-75' src={element.img} alt="" />
                    </div>
                    <h4 className='text-center text-xl xl:pt-0'>{element.name}</h4>
                    <p className='text-center pb-0'>$<span>{element.price}</span></p>
                    <p className=' text-xs mx-auto mt-2 border-1 mb-3 rounded-lg bg-gray-100 w-max px-3 py-1'>see more.</p>
                </div> 
            ))}
            </div>
        </div>
    )
}

export default Featured