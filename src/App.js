import './App.css';
import './Style/Celebs.css'
import Home from './components/Home'
import Celebs from './components/Celebs';
import Influncer from './components/Influencer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
          <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Celebs' element={<Celebs/>} />
            <Route path='/Influncer' element={<Influncer/>} />
          </Routes>
      </Router>
  );
}

export default App;
