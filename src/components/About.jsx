import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white'>
        <div className='max-w-screen-lg p-5 mx-auto flex flex-col w-full h-full justify-center'> 
            <div className='pb-8'>
                <h3 className='text-4xl font-bold inline border-b-4 border-gray-400'>About</h3>
            </div>
            <p className='text-md md:text-xl text-justify mt-5'>
                Hello, I am Mohamad Umar M from Tamilnadu, India, a passionate Web developer with deep interest in learning new things. I am fresher but I have a good experience in working with various product companies as an Intern. I am a 2023 BE passed out. I did my schoolings at Tirunelveli and I did my UG in Mepco Schlenk Engineering College, Virudhunagar. 
            </p>
            <br />
            <p className='text-md md:text-xl text-justify mt-5'>
                I have been coding since my 11th grade and I have been a good programmer with good problem solving abilities. I am a fast learner and a good observer which helps me understand things deeper. I am more of a learn by doing kinda guy, So yeah I learn by doing projects. I am very much interested in working in a challenging environment and I am looking forward to work in a startup and I wanna see the growth of the company while I grow my experience.
            </p>
            <p className='text-md md:text-xl text-justify mt-5'>To know more visit my <a className='font-bold underline'href='https://www.linkedin.com/in/mohamad-umar-m-09293a210/'>LinkedIn</a></p>
        </div>
    </div>
  )
}

export default About