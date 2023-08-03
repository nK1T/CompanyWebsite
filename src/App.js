import './App.css';
import Experience from './Components/Experience/Experience';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Taptotop from './Components/Taptotop/Taptotop';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Services/>
        <Experience/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <Taptotop/>
    </div>
  );
}

export default App;
