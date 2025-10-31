import NavApp from "./Nav/NavApp";
import "./Styles/IndexApp.css";
import { Outlet } from "react-router-dom";



const IndexApp =()=>{  //este es un tipo  de  funcion  flecha

    const user ="Andres"

    return(

        <>

        <NavApp/>
        

        <h1 className="saludo">Hola  mundo, bienvenido {user}</h1>
       <Outlet />

        <section></section>

        <div></div>

         
        </>
    )
}

export default IndexApp;
