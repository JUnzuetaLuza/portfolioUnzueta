import './App.css'
import { useRef, useState } from 'react'
import pfPic from './assets/pfPic.jpg'
import CV from './assets/JoseUnzueta-CV_EN.pdf'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import email from './assets/email.png'
import { WorkModal } from './components/WorkModal/WorkModal.jsx'
import { WorkCard } from './components/WorkCard/WorkCard.jsx'
import { works } from './components/WorkCard/WorkData.js'

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'JoseUnzueta-CV_EN.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function openGmail() {
    const subject = encodeURIComponent("Let's work together!");
    const body = encodeURIComponent("Hi José,\n\nI came across your portfolio and wanted to reach out...");
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=junzuetaluza@gmail.com&su=${subject}&body=${body}`);
  }

  return (
    <>
      <header className='navContainer'>
        <ul className='navLinks'>
          <li onClick={() => scrollToRef(aboutRef)}>About</li>
          <li onClick={() => scrollToRef(skillsRef)}>Skills</li>
          <li onClick={() => scrollToRef(workRef)}>Work</li>
          <li onClick={() => scrollToRef(contactRef)}>Contact</li>
        </ul>
      </header>
      <main>
      <section className='homeSection'>
        <h1>Hi, my name is</h1>
        <h2>José Unzueta</h2>
        <h3>Making your dream web.</h3>
        <p>I’m a Full Stack Developer (and somethings designer) with a lot of entusiasm. My goal is to continue learning and growing in this exciting industry while contributing to the development of innovative solutions. Currently, I’m working as freelance.</p>
        <button onClick={handleDownload}>Check my CV</button>
      </section>
      <section ref={aboutRef} className='aboutSection'>
        <div>
          <h2>About Me</h2>
          <p>Hi! My name is José, I’m a passionate developer with hands-on experience building functional, user-friendly applications. My journey is driven by a love for problem-solving and a commitment to continuous learning.<br/><br/>I thrive in dynamic environments, leveraging my proactive and self-taught nature to stay ahead with emerging technologies. Whether collaborating in teams or working independently, I bring a problem-solving mindset and a dedication to high-quality solutions.<br/><br/>I’ve contributed to diverse projects, refining my skills in both front-end and back-end development. I’m excited about creating innovative, accessible, and impactful digital experiences.</p>
        </div>
        <div>
          <img src={pfPic}/>
        </div>
      </section>
      <section ref={skillsRef} className='skillsSection'>
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
      <section ref={workRef} className='workSection'>
        <h2>Work</h2>
        <div className='workCards'>
          {works.map((work, index) => (
            <WorkCard key={index} work={work} onClick={() => openModal(work)}/>
          ))}
        </div>
      </section>
      <section ref={contactRef} className='contactSection'>
        <h2>Contact</h2>
        <p>I’m constantly looking for any new opportunities, my inbox is always open. Whether you have a proposal, a question or just want to say hi, I’ll get back to you!</p>
        <button onClick={openGmail}>Email me</button>
      </section>
      </main>
      <footer className='footerContainer'>
        <div>
          <ul>
            <a href='https://github.com/JUnzuetaLuza' target="_blank" rel="noopener noreferrer"><img src={github}/></a>
            <a href='https://www.linkedin.com/in/jose-unzueta-21689126a/' target="_blank" rel="noopener noreferrer"><img src={linkedin}/></a>
            <a onClick={openGmail}><img src={email}/></a>
          </ul>
          <button onClick={scrollToTop}>Check CV</button>
        </div>
        <p>© 2025 José Unzueta. All rights reserved.</p>
      </footer>
      
      {/* Renderizar el WorkModal */}
      <WorkModal isOpen={isModalOpen} onClose={closeModal} work={selectedWork} />
    </>
  )
}

export default App
