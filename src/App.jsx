import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className='flex flex-col items-center bg-[emerald-25]'>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
