import { useState } from 'react'
import './App.css'
import pfPic from './assets/pfPic.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='navContainer'>
        <ul className='navLinks'>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className='homeSection'>
        <h1>Hi, my name is</h1>
        <h2>José Unzueta</h2>
        <h3>Making your dream web.</h3>
        <p>I'm a Full Stack Developer (and somethings designer) with a lot of entusiasm. My goal is to continue learning and growing in this exciting industry while contributing to the development of innovative solutions. Currently, I'm working as freelance.</p>
        <button>Check my CV</button>
      </section>
      <section className='aboutSection'>
        <div>
          <h2>About Me</h2>
          <p>Hi! My name is José, I’m a passionate and driven Full Stack Developer with hands-on experience in a wide range of technologies. My journey in web development has been fueled by a deep curiosity for building functional, user-friendly applications and a commitment to continuous learning.<br/><br/>I thrive in dynamic environments where I can leverage my proactive and self-taught nature to stay ahead of the curve with emerging technologies. Whether collaborating in multidisciplinary teams or tackling challenges independently, I bring a problem-solving mindset and a dedication to delivering high-quality solutions.<br/><br/>Currently, I’m working as a freelance developer, where I’ve had the opportunity to contribute to diverse projects and refine my skills in both front-end and back-end development. I’m particularly excited about creating innovative digital experiences that are not only visually appealing but also accessible and impactful.</p>
        </div>
        <div>
          <img src={pfPic}/>
        </div>
      </section>
    </>
  )
}

export default App
