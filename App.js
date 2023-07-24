import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Program from './components/Programs/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonals from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
           <Testimonals/>
           <Join/>
           <Footer/>
    </div>
  );
}

export default App;
