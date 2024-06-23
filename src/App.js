import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import BasicTimeline from './components/WorkExperience2/BasicTimeline';
import Projects from './components/WorkExperience2/Project';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </div>

    <Footer />
  </>
  );
}

export default App;
