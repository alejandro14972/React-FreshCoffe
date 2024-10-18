import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { QuioscoProvider } from "./context/quioscoProvider";
import './index.css'
import  router  from "./router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QuioscoProvider>
    <RouterProvider router={router}></RouterProvider>
    </QuioscoProvider>
  </StrictMode>,
)
