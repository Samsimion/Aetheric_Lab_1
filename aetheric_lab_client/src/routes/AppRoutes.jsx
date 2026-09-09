import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Portfolio from "../pages/Portfolio";
import Insights from "../pages/Insights";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/products",
    Component: Products,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/insights",
    Component: Insights,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

export default router;




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import Portfolio from '../pages/Portfolio';
// import Insights from '../pages/Insights';
// import Contact from '../pages/Contact';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/projects" element={<Portfolio />} />
//       <Route path="/insights" element={<Insights />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
