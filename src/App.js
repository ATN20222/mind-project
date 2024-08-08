import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar/Nav';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Solutions from './Pages/Solutions/Solutions';


function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='about'element={<About/>} ></Route>
          <Route path='services'element={<Services/>} ></Route>
          <Route path='solutions'element={<Solutions/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
