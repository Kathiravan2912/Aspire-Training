import './App.css';
import Nav from './Nav';
import { Route, Link, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import Home from './Home';
import Product from './Product';
import MenShirts from './MenShirts';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Product' element={<Product/>}></Route>
        <Route path='ContactUs' element={<ContactUs/>}></Route>
        <Route path='/Home/MenShirts' element={<MenShirts/>}></Route>
      </Routes>
      </BrowserRouter >
      </div >
  );
}

export default App;





