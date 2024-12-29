
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Community from './components/Community';
import Tools from './components/Tools';
import Footer from './components/Footer';
import { SearchProvider } from './context/SearchContext';

export default function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <Hero />
        <About />
        <Courses />
        <Tools />
        <Community />
        <Footer />
      </div>
    </SearchProvider>
  );
}