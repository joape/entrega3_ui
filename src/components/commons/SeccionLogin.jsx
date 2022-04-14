import { useState } from "react";
import { api } from "../../api/api";

export function SeccionLogin(){
    /*defino las variables para los estados*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //El formulario se manda
    const handleSubmit = (event) => {
    event.preventDefault(); /* detengo el comportamiento por default*/

        //Cambiar el estado loading a true
        setLoading(true);

        //Borramos el error
        setError("");

        //Llamar un POST con axios a /login y mandar la info en el
        //estado actual
        api.get("/usuarios", { email: email, password: password }).then(
        (response) => {
            console.log(response);

            //Cambiar el estado loading a false
            setLoading(false);
        },
        (errorResponse) => {
            //Guardamos la respuesta de la api en una constante
            const response = errorResponse.response.data;

            //Cambiamos el estado para mostrar el error
            setError(response.error);

            //Cambiar el estado loading a false
            setLoading(false);
        }
        );
    
    };
    return (<div className="login">        
            <div className="login caja">                
                <form onSubmit={handleSubmit}>
                    <h2 className="titulo">LOGIN</h2>                   
                    <div className="cont">
                        <label htmlFor="login-usuario">Usuario:</label>
                        <input 
                            name="usuario" 
                            type="email"
                            id="login-usuario"
                            placeholder="Ingrese su correo"
                            required
                        />
                    </div>
                    <div className="cont">
                        <label htmlFor="login-password">Password:</label>
                        <input 
                            name="clave" 
                            type="password"
                            id="login-password"
                            placeholder="Ingrese su clave"
                            required
                        />                      
                    </div>
                    <div className="cont2">
                        <button type="submit" className="btnlogin"> Login</button>
                        <span className="text-danger d-block"></span>                     
                    </div>
                </form>                                        
            </div> 
    </div>);
}