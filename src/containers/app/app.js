import { Route, Routes } from "react-router-dom";

import NavBar from "components/navbar";

import Home from "pages/home";
import Products from "pages/products";
import Autentification from "pages/autentification";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index={true} element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='autentification' element={<Autentification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
