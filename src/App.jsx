import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TempleVideoSection from './pages/TempleVideoSection';
import CharDhamSection from './components/CharDhamSection';
import JyotirlingSection from './components/JyotirlingSection';
import CharDhamPage from './pages/CharDhamPage';
import JyotirlingDarshan from './pages/JyotirlingDarshan';
import TempleQuotesCarousel from './pages/TempleQuotesCarousel';
import Footer from './pages/Footer';
import Login from './components/Login'
import Contact from './pages/Contact';
import HinduTempleBeauty from './pages/HinduTempleBeauty';
import Blog from './pages/Blog';
import TempleMapPage from './pages/TempleMapPage';
import Register from './components/Register';
function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            <>
              <TempleVideoSection />
              <TempleQuotesCarousel />
              <CharDhamSection />
              <JyotirlingSection />
              <HinduTempleBeauty/>
            </>
          }
        />
        <Route path='/Search' element={<TempleMapPage/>}/>
        <Route path="/char-dham" element={<CharDhamPage />} />
        <Route path="/jyotirling-darshan" element={<JyotirlingDarshan />} />


        <Route path='/HinduTempleBeauty' element={<HinduTempleBeauty/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
