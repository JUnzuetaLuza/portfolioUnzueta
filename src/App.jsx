import { useState } from 'react'
import CursorLight from './components/CursorLight'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CursorLight/> */}
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
        <p>I'm a front-end web developer (and somethings designer) with a lot of entusiasm. My goal is to continue learning and growing in this exciting industry while contributing to the development of innovative solutions. Currently, I'm working as freelance.</p>
        <button>Check my CV</button>
      </section>
    </>
  )
}

export default App
