import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { useEffect } from 'react';
import Product from './pages/Product';

function ScrollToTopOnMount() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
