import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar/Nav';
import About from './Pages/About/About';


function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='about'element={<About/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
