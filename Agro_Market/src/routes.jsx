import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Farmers from "./Pages/Farmers";
import ProductDetail from "./Pages/ProductDetail";
import ChatPage from "./Components/Home/ChatPage";
import Cart from "./Pages/Cart";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }, 
  {
    path: "/contact",
    element: <Contact />,
  }, 
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/farmers",
    element: <Farmers />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/chat/:farmerId",
    element: <ChatPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },


 
  // createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/contact" element={<Contact />} />
  //     <Route path="/services" element={<Services />} />
  //     <Route path="/farmers" element={<Farmers />} />
  //     <Route path="/product/:id" element={<ProductDetail />} />

  //   </>
  // )
]);

export default routes;
