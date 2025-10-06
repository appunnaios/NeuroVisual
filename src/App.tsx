import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
