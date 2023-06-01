import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormsClassMainComponent from './components/FormsClassComponents/FormsClassMainComponent';
import FormsFunctionMainComponent from './components/FormsFunctionalComponents/FormsFunctionMainComponent';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navBar'>
          <ul className='navLink'>
            <li className='navItem'>
              <Link to="/">Class Component</Link>
            </li>
            <li className='navItem'>
              <Link to="/functional">Functional Component</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FormsClassMainComponent />} />
          <Route path="/functional" element={<FormsFunctionMainComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
