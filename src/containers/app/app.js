import { Route, Routes } from "react-router-dom";

import NavBar from "components/navbar";

import Home from "pages/home";
import Autentification from "pages/autentification";
import Headphones from "pages/category/headphones";
import HeadphonesXX99 from "pages/products/headphones/xx99-one";
import HeadphonesXX99Two from "pages/products/headphones/xx99-two";
import Speakers from "pages/category/speakers";
import Earphones from "pages/category/earphones";
import Productxx59 from "pages/products/headphones/xx59";
import ProductPage from "pages/productpage/productpage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index={true} element={<Home />} />
          <Route path="headphonesXX99" element={<HeadphonesXX99 />} />
          <Route path="headphonesXX99two" element={<HeadphonesXX99Two />} />
          <Route path="autentification" element={<Autentification />} />
          <Route path="headphones" element={<Headphones />} >
            {/* <Route path=":id" element={<ProductPage />} /> */}
          </Route>
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="productxx59" element={<Productxx59 />} />
          <Route path="product" element={<ProductPage />} >
            <Route path=":id" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
