import React from 'react'
import Cryptbuzz from '../assets/CRYPTBUZZ.png'
import Gradeo from '../assets/GRADEO.png'
import Chatbot from '../assets/chatbot.png'
const Portfolio = () => {
    const projects = [
        {
            id:1,
            src:Cryptbuzz,
            href: 'https://github.com/mdumar2430/Cryptbuzz/tree/main/CryptoBuzz'
        },
        {
            id:2,
            src:Gradeo,
            href:'https://github.com/mdumar2430/GradeO'
        },
        {
            id:3,
            src:Chatbot,
            href:'https://github.com/mdumar2430/Web-Tech/tree/main/Frontend/ReactJs/chatbot'
        },        
    ]
  return (
    <div name="Portfolio" className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Hall of Fame!</p>
                <p className='text-2xl py-4'>Check out some of my Web Projects!</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                projects.map(({id, src, href    }) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center items-center'>
                        <a href={href} className='px-6 py-4 hover:scale-105 duration-200 hover:font-bold'>View Code</a>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio