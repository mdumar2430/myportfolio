import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import angular from '../assets/Angular.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
const Skills = () => {
    const skills = [
        {
            id : 1,
            src : html,
            title : 'HTML',
        },
        {
            id : 2,
            src : css,
            title : 'CSS',
        },
        {
            id : 3,
            src : js,
            title : 'Javascript',
        },
        {
            id : 4,
            src : java,
            title : 'Java',
        },
        {
            id : 5,
            src : python,
            title : 'Python',
        },
        {
            id : 6,
            src : angular,
            title : 'Angular',
        
        },
        {
            id : 7,
            src : react,
            title : 'ReactJs',
        },
        {
            id : 8,
            src : github,
            title : 'Github',
        },
        {
            id : 9,
            src : node,
            title : 'NodeJS',
        },
        {
            id : 10,
            src : tailwind,
            title : 'Tailwind',
        },
    ]
  return (
    <div name="Experience" className='w-full bg-gradient-to-b from-gray-800 via-black to-black text-white h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400 p-2'>
                    Experience
                </p>
                <p className='text-2xl py-4'>
                    Web Technologies that I have worked on is right here
                </p>
            </div>
            <div className='w-full grid sm:grid-cols-3 grid-cols-2 gap-8 px-12 py-8 sm:px-0 text-center'>
                {skills.map(({id, src, title}) => (
                    <div key={id} className='shadow-md rounded-lg duration-500 hover:scale-105 py-2'>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p>{title}</p>
                </div>

                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skills