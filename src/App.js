import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Fotter from "./Components/Footer/Footer";
import men_banner from "./Components/Assests/banner_mens.png";
import women_banner from "./Components/Assests/banner_women.png";
import kid_banner from "./Components/Assests/banner_kids.png";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/User/LoginPage";
import SignUp from "./Pages/User/Signup";
import Category from "./Components/Category/Category";
import SingleData from "./Components/SingleData/SingleData";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/category"
            element={ <Category />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}/>
          <Route path="/productdisplay" element={<ProductDisplay/>}/>
           
    
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUp/>} />


          <Route path="/singledata" element={<SingleData/>}>
          <Route path=":singledataId" element={<SingleData/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
