// src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../components/Login"
import Navbar from '../components/Navbar';
import HinduTempleBeauty from './HinduTempleBeauty';
import TempleVideoSection from './TempleVideoSection';
// import TempleVideoSection from '../pages/TempleVideoSection';
// import CharDhamSection from '../components/CharDhamSection';
// import JyotirlingSection from '../components/JyotirlingSection';
// import CharDhamPage from '../pages/CharDhamPage';
// import JyotirlingDarshan from '../pages/JyotirlingDarshan';
// import TempleQuotesCarousel from './TempleQuotesCarousel';
// import Footer from './footer';
// import HinduTempleBeauty from './HinduTempleBeauty';
// import Blog from './Blog';
function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //   {/* <Route path="/login" element={<Login />} /> */}
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <TempleVideoSection />
    //           <TempleQuotesCarousel />
    //           <CharDhamSection />
    //           <JyotirlingSection />
    //           <HinduTempleBeauty/>
    //           <Blog/>
    //         </>
    //       }
    //     />
    //     <Route path="/char-dham" element={<CharDhamPage />} />
    //     <Route path="/jyotirling-darshan" element={<JyotirlingDarshan />} />
    //   </Routes>
    //   <Footer/>
    // </Router>
 
 <>
     <Navbar/>
     <HinduTempleBeauty/>
     <Blog/>
     <Login/>
 </>  
  );
}

export default App;
