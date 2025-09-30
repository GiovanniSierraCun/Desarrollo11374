const Registro = ()=>{
    return(
        <>
        
       <h2> FORMULARIO DE  REGISTRO </h2>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
                <input
                type="texto"
                className="nombre"
                value={formData.nombre}
                required
                >     
                </input>
            <label>Correo Electronico</label>
                <input
                   type="email"
                   className="email"
                   value={formData.email}
                   required
                                  
                ></input>

            <label>Contrasena</label>
            <input 
            type="password"
            className="password"
            required
            onChange={handleChange}

             >
            </input>    
        <button type="submit" >Registrese</button>
    </form>
     
        </>


    ),

}

export default Registro;
