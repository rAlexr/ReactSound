import { Route, Routes } from "react-router-dom";

import NavBar from "components/navbar";

import Home from "pages/home";
import Autentification from "pages/autentification";
import Headphones from "pages/catregory/headphones";
import HeadphonesXX99 from "pages/products/headphones/xx99-one";
import HeadphonesXX99Two from "pages/products/headphones/xx99-two";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index={true} element={<Home />} />
          <Route path='headphonesXX99' element={<HeadphonesXX99 />} />
          <Route path='headphonesXX99two' element={<HeadphonesXX99Two />} />
          <Route path='autentification' element={<Autentification />} />
          <Route path='headphones' element={<Headphones />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
