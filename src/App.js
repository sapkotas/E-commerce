
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginPage from './Pages/LoginPage';
import Fotter from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner = {women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner ={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        
      </Routes>
      <Fotter/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
