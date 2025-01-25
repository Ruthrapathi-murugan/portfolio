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
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Wrapper component to conditionally render the Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Do not show Navbar on "/more-projects"
  const hideNavbar = location.pathname === "/more-projects";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
