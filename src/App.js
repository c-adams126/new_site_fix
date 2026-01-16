import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import Footer from './components/reuse/Footer';
import SiteNav from './components/reuse/SiteNav';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/Service';
import Book from './pages/Booking/Book';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/booking' element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
