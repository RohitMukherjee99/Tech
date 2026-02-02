import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Committee from './components/Committee';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Accommodation from './components/Accommodation';
import Sponsors from './components/Sponsors';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Committee />
        <Program />
        <Speakers />
        <Registration />
        <Accommodation />
        <Sponsors />
        <Venue />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Manrope, sans-serif',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
