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
import Experience from './components/Experience.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ✅ Always show Navbar & Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
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
                <Experience />
                <Skills />
                <About />
                <Service />
                <Projects />
                <Contact />
              </>
            }
          />
          {/* ✅ More Projects now includes Navbar & Footer too */}
          <Route path="/more-projects" element={<MoreProjects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
