import React from 'react'
import Cards from '../components/Cards'
import About from './About'
import frame from '../assets/frame.jpg'
import image from '../assets/image.png'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto my-4 gap-y-0 gap-x-12 justify-between">
      <div className="w-11/12 max-w-[450px] mx-0 text-white pt-20">
        <h1 className="text-richblack-5 font-semibold text-4xl">Hello there!, <span className='text-sky-400'>I'm Tarun</span></h1>

        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100 text-4xl">  A passionate <span className='text-sky-400'>frontend developer</span> dedicated to crafting beautiful and user-friendly web experiences.</span>
        </p>


       

        
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className='opacity-0'
        />
        <img
          src={image}
          alt="patter"
          width={400}
          height={400}
          loading="lazy"
          className="absolute -top-4 right-4 rounded-lg"
        />
      </div>
    </div>
    <About />
      <Cards />
      <Contact />
    </div>
  )
}

export default Home