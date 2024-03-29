import React from 'react'
import frame from '../assets/frame.jpg';
import image from '../assets/image.png';

const About = () => {
  return (
    <div className="flex flex-col items-center mx-8 justify-center h-screen shadow-lg border border-gray-800  rounded-lg">
    <h1 className="text-4xl font-bold mb-16">About</h1>
    <p className="text-2xl text-center mx-8 px-8">
      I am in pre-final year of my Btech from ABES Engineering College. My journey in the world of programming began with Java, where I honed my problem-solving skills.
      My toolkit extends to the trio of HTML, CSS, and JavaScript, where I craft beautiful and responsive web interfaces. And when it comes to building powerful front-end applications, I turn to React.js and Next.js for their flexibility and scalability.
      On the back end, I thrive in the world of databases. MySQL is my trusted companion for managing data, while Node.js and Express.js empower me to create robust server-side applications. And let’s not forget MongoDB, where I explore the wonders of NoSQL databases.
      <br/>
      <span className='text-sky-400 font-semibold'>Let’s build something amazing together! 🚀  </span>
    </p>
  </div>
  )
}

export default About