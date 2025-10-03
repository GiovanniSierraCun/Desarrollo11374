import reactDom from"react-dom/client";
import IndexApp from "./IndexApp.jsx";

import React from "react";
import Registro from "./Registro/registroApp.jsx";
/* implementacion  del  router*/
import{
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";


const router=createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<IndexApp/>}>,
        <Route path="/registro" element={<Registro/>}/>,
    </Route>
    )
);

const root=reactDom.createRoot(document.getElementById('root'))

root.render(

   <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>

)