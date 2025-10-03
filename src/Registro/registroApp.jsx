const Registro = ()=>{
    return(
        
        <>
      <h1>Registro</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>

    
    
    </>
     
        


    ),

}

export default Registro;
