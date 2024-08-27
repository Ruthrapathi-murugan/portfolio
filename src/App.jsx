import Navbar from './components/Navbar.jsx'
import Service from './components/Service.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Education from './components/Education.jsx'
import ConnectMe from './components/ConnectMe.jsx'

function App() {
 

  return (
    <>
      <Navbar/>
   
      <Hero/>
      <ConnectMe/>
      <Education/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
    
     
  )
}

export default App
