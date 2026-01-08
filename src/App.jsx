import { useState } from "react";
import Body from "./Body";
import {Layout} from "./Layout";

import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HowItWorks from "./Components/HowItWorks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Workerlist from "./Components/ViewWorker/Workerlist";

function App() {
  const Shouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Body /> },
        {path:"/our-workers",
              element:<Workerlist/>
            },
        { path: "/services", element: <Services /> 
          
        },
         {path:"/services/our-workers",
              element:<Workerlist/>
            },
         {path:"/our-workers",
              element:<Workerlist/>
            },
        {path:"/about",element:<About/>},
        {path:"/contact",element:<Contact/>},
        {path:"/how-it-works",element:<HowItWorks/>},
        
      ],
    },
  ]);
  return <RouterProvider router={Shouter} />;
}
export default App;
