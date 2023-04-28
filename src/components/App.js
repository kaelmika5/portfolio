import '../styles/App.css';
import About from './About';
import BackToTop from './BackToTop';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';
import Nav from './Nav';  

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skills/>
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
