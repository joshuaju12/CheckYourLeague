import './style.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.js';
import Page from './pages/page/Page.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
