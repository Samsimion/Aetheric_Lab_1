 // future 

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




// services

import WebsiteDevelopment from "../pages/WebsiteDevelopment";
import WebApplications from "../pages/WebApplications";
import MobileApplications from "../pages/MobileApplications";
import BusinessSystems from '../pages/BusinessSystems'
import UIUXDesigns from "../pages/UIUXDesigns";
import APIsIntegrations from "../pages/APIsIntegrations";
// import Solutions from "./pages/Solutions";

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
    path : "/services/websites",
    Component : WebsiteDevelopment,
  },

  {
    path: "/services/:service",
    Component: ServiceDetail,
  },



  {
    path: "/pricing",
    Component: Pricing,
  },



  {
    path: "/services/web-applications",
    Component: WebApplications,
  },

  {
    path: "services/mobile-applications",
    Component: MobileApplications,
  },

  {
    path: "services/business-systems",
    Component: BusinessSystems,
  },

  {
    path: "services/ui-ux",
    Component: UIUXDesigns,
  },
  {
    path: "services/apis-integrations",
    Component: APIsIntegrations,
  },

  {
    path: "services/solutions",
    Component: Solutions,
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
    path: "/products/:products",
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



// <Route
//   path="/services/websites"
//   element={<WebsiteDevelopment />}
// />