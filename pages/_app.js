import '../styles/globals.css'
import '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import SocialNav from '../components/SocialNav';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialNav />
    </div>
      
  );
}
