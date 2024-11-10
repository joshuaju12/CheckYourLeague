import './style.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, createContext, useEffect} from 'react';
import Home from './pages/home/Home.jsx';
import Page from './pages/page/Page.jsx';
import background from './pages/assets/background.jpg';
import background2 from './pages/assets/background2.png';

export const SharedContext = createContext();

function App() {

  const [currentRoute, setCurrentRoute] = useState('home');

  const setHomepageBackground = () => {
    const body = document.body;
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  };

  const setPageBackground = () => {
    const body = document.body;
    body.style.backgroundImage = `url(${background2})`;
  };

  useEffect(() => {
    if (currentRoute === 'home') {
      setHomepageBackground();
    } else {
      setPageBackground();
    }
  }, [currentRoute]);

  return (
    <SharedContext.Provider value={{setCurrentRoute}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </SharedContext.Provider>
  );
}

export default App;
