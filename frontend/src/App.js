import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ImpForms from './components/ImpForms';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NewAppl from './components/NewAppl';
import PrevAppl from './components/PrevAppl';

function App() {
  return (
    <div className="App bg-gray-100">
      <Router>
        <div className=''>
          <Header />
          <Navbar />
        </div>
        <Routes>
        <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path='/newappl'
            element={
              <NewAppl />
            }
          />
          <Route
            path='/prevappl'
            element={
              <PrevAppl />
            }
          />
          <Route
            path='/impforms'
            element={
              <ImpForms />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
