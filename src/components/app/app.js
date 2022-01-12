import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import AppMain from "../pages/main";
import AppONas from '../pages/app-o-nas';
import AppHeader from "../modules/app-header";
import AppFooter from '../modules/app-footer';
import AppGarant from '../pages/app-garant';
import AppDostavka from '../pages/app-dostavka';
import AppContaсt from '../pages/app-contaсt';
import AppProductItem from "../pages/app-productItem";
import AppProducts from "../pages/app-products";
import NotFound from "../pages/app-notFound";
import Feedback from "../pages/feedback";



const App = () => {
  return (
    <>
      <Router>
      <div className="content">
          <AppHeader/>
        <Routes>
          <Route path="/" element={<AppMain />} />;
          <Route path="/about" element={<AppONas />} />;
          <Route path="/garant" element={<AppGarant />} />;
          <Route path="/dostavka" element={<AppDostavka />} />;
          <Route path="/contact" element={<AppContaсt />} />;
          <Route path="/productItem/:id" element={<AppProductItem/>} />;
          <Route path="/products/:group" element={<AppProducts/>} />;
          <Route path="/products" element={<AppProducts/>} />;
          <Route path="*" element={<NotFound/>} />;
          <Route path="/feedback" element={<Feedback/>} />;
        </Routes>
        </div>
        <AppFooter/>
</Router>
    </>
  );
};

export default App;
