import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
