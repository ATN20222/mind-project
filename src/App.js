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
import News from './Pages/News/News';
import ContactUs from './Pages/ContactUs/ContactUs';
import Clients from './Pages/Clients/Clients';
import Careers from './Pages/Careers/Careers';


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
          <Route path='news'element={<News/>} ></Route>
          <Route path='contactus'element={<ContactUs/>} ></Route>
          <Route path='clients'element={<Clients/>} ></Route>
          <Route path='careers'element={<Careers/>} ></Route>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
