import { useState } from "react";
import Body from "./Body";
import {Layout} from "./Layout";

import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HowItWorks from "./Components/HowItWorks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const Shouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Body /> },
        { path: "/services", element: <Services /> },
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/how-it-works",element:<HowItWorks/>}
      ],
    },
  ]);
  return <RouterProvider router={Shouter} />;
}
export default App;
