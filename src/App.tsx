import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import UVPrinting from './pages/UVPrinting';
import SunFilm from './pages/SunFilm';
import GlassSticker from './pages/GlassSticker';
import Wallpaper from './pages/Wallpaper';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'uv-printing' | 'sun-film' | 'glass-sticker' | 'wallpaper' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      'home': 'Space Innovation Myanmar - Sun Block, UV Protection Glass & Sticker Solutions',
      'about': 'About Us - Space Innovation Myanmar',
      'uv-printing': 'UV Printing Services - Space Innovation Myanmar',
      'sun-film': 'Sun Film Installation - Space Innovation Myanmar',
      'glass-sticker': 'Glass Sticker Solutions - Space Innovation Myanmar',
      'wallpaper': 'Custom Wallpaper - Space Innovation Myanmar',
      'contact': 'Contact Us - Space Innovation Myanmar',
    };
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'uv-printing':
        return <UVPrinting onNavigate={handleNavigation} />;
      case 'sun-film':
        return <SunFilm onNavigate={handleNavigation} />;
      case 'glass-sticker':
        return <GlassSticker onNavigate={handleNavigation} />;
      case 'wallpaper':
        return <Wallpaper onNavigate={handleNavigation} />;
      case 'contact':
        return <Contact onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
