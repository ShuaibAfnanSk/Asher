import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Product from './pages/Product';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import orange from './assets/loader.png'

function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setAnimateOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopOnMount />

      {/* Loader */}
      {loading && (
        <div className={`loader-container ${animateOut ? "move-up" : ""}`}>
          <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
            <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
          </svg>
        </div>
      )}

      {/* Routes */}
      <div className={`${loading ? "hidden" : "block"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/termsandconditions' element={<Terms />} />
          <Route path='/privacypolicy' element={<Privacy />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;