import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

import Cart from "./Pages/Cart";
import LoginPage from "./Pages/User/LoginPage";
import SignUp from "./Pages/User/Signup";

import SingleData from "./Components/SingleData/SingleData";

import ProductForm from "./Components/Add/ProductForm";
import ShopPage from "./Components/ShopPage/ShopPage";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/Aboutus/AboutUs";
import FAQ from "./Components/FAQ/FAQ";
import TermsOfService from "./Components/TermsofService/TermsOfService";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
          

          <Route path="/add" element={<ProductForm />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUp />} />

          <Route path="/singledata" element={<SingleData />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
