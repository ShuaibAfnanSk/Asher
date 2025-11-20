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
          <div className="loader"></div>
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