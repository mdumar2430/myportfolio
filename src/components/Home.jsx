import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProfileImage from '../assets/MyPic.jpg'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg h-full mx-auto px-4 flex flex-col justify-center items-center md:flex-row'>
            <div className='flex flex-col h-full justify-center w-full'>
                <h2 className='text-4xl md:text-7xl text-white font-bold'>
                    I'm a Full Stack Developer!
                </h2>
                <p className='py-4 text-gray-500 max-w-md'>
                    Full Stack Intern @Ratham | Web Developer | MSEC'23 | Finalist at SIH'22
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        <Link to='Portfolio' smooth duration={200} >Portfolio</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}/>
                            </span>
                    </button>

                </div>
            </div>
            <div className='w-full'>
                <img src={ProfileImage} alt="my profile" className='rounded-full mx-auto w-3/5 md:w-4/5'/>
            </div>
        </div>
    </div>
  )
}

export default Home