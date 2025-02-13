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
          <p>Hi! My name is José, I’m a passionate developer with hands-on experience building functional, user-friendly applications. My journey is driven by a love for problem-solving and a commitment to continuous learning.<br/><br/>I thrive in dynamic environments, leveraging my proactive and self-taught nature to stay ahead with emerging technologies. Whether collaborating in teams or working independently, I bring a problem-solving mindset and a dedication to high-quality solutions.<br/><br/>I’ve contributed to diverse projects, refining my skills in both front-end and back-end development. I’m excited about creating innovative, accessible, and impactful digital experiences.</p>
        </div>
        <div>
          <img src={pfPic}/>
        </div>
      </section>
      <section className='skillsSection'>
        <h2>Skills</h2>
        <div>
          <h4>JavaScript</h4>
          <h4>React.js</h4>
          <h4>React Native</h4>
          <h4>Node.js</h4>
          <h4>Next.js</h4>
          <h4>Redux</h4>
          <h4>Java</h4>
          <h4>Swift</h4>
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>PostgreSQL</h4>
          <h4>Git</h4>
        </div>
      </section>
    </>
  )
}

export default App
