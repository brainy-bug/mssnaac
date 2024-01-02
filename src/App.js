import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";

import {
  Home,
  // About,
  // Donation,
  // Detail,
  MainLayout,
  Error404,
  UnderConstruction,
} from "./views";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/")
      animateScroll.scrollToTop({
        duration: 1500,
        smooth: "easeInOutQuart",
      });
  }, [location.pathname]);

  return (
    <div className='App overflow-hidden'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<UnderConstruction />} />
          <Route path='/donate' element={<UnderConstruction />} />
          <Route path='/donate/details' element={<UnderConstruction />} />
          <Route path='/societies' element={<UnderConstruction />} />
          <Route path='/contact-us' element={<UnderConstruction />} />
          <Route path='/registration' element={<UnderConstruction />} />
          <Route path='/projects' element={<UnderConstruction />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
