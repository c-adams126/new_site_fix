import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import Footer from './components/reuse/Footer';
import SiteNav from './components/reuse/SiteNav';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
