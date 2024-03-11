import './App.css';
import Navbar from './Components/Navbar';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import MarqueeHeader from './Components/MarqueeHeader';
import Footer from './Components/Footer';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
   
      <div  className="app-container">
        <div className={`banner-container ${isHomePage ? 'banner' : 'other-banner'}`}>
          <br />
          <MarqueeHeader text="Website creater: 1. Shrunkhala Lambat || 2. Abhishek Rajeshirke || 3. Aniket Borse || 4. Swapnil Paithankar || 5. Vaibhav Deore || 6. Shruti Shendge || 7. Rohit Mharskar || 8. Ankit Yadav || 9. Divyansh Dangwal   " />
          <Navbar />

          <div className="home-banner-header">
          {isHomePage && <>Welcome to Computer Seekho...</>}
          </div>

        </div>
        <Outlet />
        <br />
        <Footer />
      </div>
    
    
  );
}

export default App;
