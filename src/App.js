import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App flex flex-col bg-black text-white ">
        <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
  
    </div>
  );
}

export default App;
