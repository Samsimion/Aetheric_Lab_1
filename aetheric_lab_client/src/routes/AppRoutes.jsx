// import { createBrowserRouter } from "react-router";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Products from "../pages/Products";
// import Portfolio from "../pages/Portfolio";
// import Insights from "../pages/Insights";
// import Contact from "../pages/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Home,
//   },
//   {
//     path: "/about",
//     Component: About,
//   },
//   {
//     path: "/services/:service",
//     Component: ServiceDetail,
//   },
//   {
//     path: "/solutions/:solution",
//     Component: SolutionDetail,
//   },
//   {
//     path: "/products/:product",
//     Component: ProductDetail,
//   },
//   {
//     path: "/portfolio",
//     Component: Portfolio,
//   },
//   {
//     path: "/insights",
//     Component: Insights,
//   },
//   {
//     path: "/contact",
//     Component: Contact,
//   },
// ]);

// export default router;


// // future 

import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Portfolio from "../pages/Portfolio";
import Insights from "../pages/Insights";
import Contact from "../pages/Contact";

import Solutions from "../pages/Solutions";
import HowWeWork from "../pages/HowWeWork";
import Pricing from "../pages/Pricing";
import Careers from "../pages/Careers";

import ServiceDetail from "../pages/ServiceDetail";
import SolutionDetail from "../pages/SolutionDetail";
import ProductDetail from "../pages/ProductDetail";


const router = createBrowserRouter([
  /* =====================================================
     HOME
  ===================================================== */

  {
    path: "/",
    Component: Home,
  },


  /* =====================================================
     COMPANY
  ===================================================== */

  {
    path: "/about",
    Component: About,
  },

  {
    path: "/portfolio",
    Component: Portfolio,
  },

  {
    path: "/how-we-work",
    Component: HowWeWork,
  },

  {
    path: "/careers",
    Component: Careers,
  },


  /* =====================================================
     SERVICES
  ===================================================== */

  {
    path: "/services",
    Component: Services,
  },

  {
    path: "/services/:service",
    Component: ServiceDetail,
  },
  {
    path: "/pricing",
    Component: Pricing,
  },


  /* =====================================================
     SOLUTIONS
  ===================================================== */

  {
    path: "/solutions",
    Component: Solutions,
  },

  {
    path: "/solutions/:solution",
    Component: SolutionDetail,
  },


  /* =====================================================
     PRODUCTS
  ===================================================== */

  {
    path: "/products",
    Component: Products,
  },



  {
    path: "/products/:product",
    Component: ProductDetail,
  },


  /* =====================================================
     INSIGHTS
  ===================================================== */

  {
    path: "/insights",
    Component: Insights,
  },


  /* =====================================================
     CONTACT
  ===================================================== */

  {
    path: "/contact",
    Component: Contact,
  },
]);

export default router;