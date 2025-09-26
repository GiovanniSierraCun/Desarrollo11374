import NavApp from "./Nav/NavApp";
import "./Styles/IndexApp.css"



const IndexApp =()=>{  //este es un tipo  de  funcion  flecha

    const user ="Andres"

    return(

        <>

        <NavApp/>


        <h1 className="saludo">Hola  mundo, bienvenido {user}</h1>
    

        <section></section>

        <div></div>
        </>
    )
}

export default IndexApp;
