import Navbar from './components/Navbar.jsx';
import Service from './components/Service.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx';
import ConnectMe from './components/ConnectMe.jsx';
import Skills from './components/Skills.jsx';
import MoreProjects from './components/MoreProjects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ConnectMe />
              <Education />
              <Skills />
              <About />
              <Service />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
