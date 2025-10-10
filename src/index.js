import reactDom from"react-dom/client";
import IndexApp from "./IndexApp.jsx";

import React from "react";
import RegistApp from "./Registro/registroApp.jsx";
import LoginApp from "./Login/LoginApp.jsx";
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
       <Route path="/registro" element={<RegistApp/>}/>,
        <Route path="/login" element={<LoginApp/>}/>,
    
    
    </Route>
    )
);

const root=reactDom.createRoot(document.getElementById('root'))

root.render(

   <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>

)