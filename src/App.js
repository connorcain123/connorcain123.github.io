import Nav from './components/navbar/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { useEffect } from 'react';
import { Events } from 'react-scroll';

export default function App() {

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log("scrolling");
    })
  }, []);

  return (
    <div>
      <Nav />
      <div className="content-container">
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
