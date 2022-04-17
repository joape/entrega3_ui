import { useState } from "react";
import { api } from "../../api/api";

export function SeccionLogin(){
    //defino las variables para los estados - Nos permite redibujar en el formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); //uso este estado para cambiar boton.
    const [error, setError] = useState("");

    //El formulario se manda
    const handleSubmit = (event) => {
        event.preventDefault(); //detengo el comportamiento por default
        //console.log(email);
        //console.log(password);
        
        //Cambiar el estado loading a true para que se dibuje y muestre "Validando"
        setLoading(true);

        //Borramos el error
        setError("");

        //Borro o Inicializo los estados de los inputs
        //setEmail("");
        //setPassword("");

        //armo lo que voy a mandar en el POST.
        //Si tengo que mandar archivos debo instanciar un FormData previo al envio POST
        //Si necesitara enviar un archivo, deberia usar el formData.append("correo", email)
        //con cada uno de los valores a enviar, suplantando el const data
        const data = { //esto es un objeto
            email: email, 
            password: password 
        };

        //Llamar un POST con axios a /login y mandar la info en el estado actual. 
        api.post("/usuarios", data).then((response) => {
                console.log(response);

            //Cambiar el estado de loading a false cuando me responde OK la API
            setLoading(false);
        },
        (errorResponse) => {
            //Guardamos la respuesta de la api en una constante
            const response = errorResponse.response.data;

            //Cambiamos el estado para mostrar el error
            setError(response.error);

            //Cambiar el estado loading a false
            setLoading(false);
        });    
    };

    //Maneja estados del Formulario
    const handleEmailChange = (event) => { //aca manejo que se redibuje el email (componente controlado)
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => { //aca manejo que se redibuje la clave (componente controlado)
        setPassword(event.target.value); //target hace referencia al input que origino el evento. Por eso pedimos el value
    };

    return (<div className="login">        
            <div className="login caja">                
                <form onSubmit={handleSubmit}>
                    <h2 className="titulo">LOGIN</h2>                   
                    <div className="cont">
                        <label htmlFor="login-usuario">Usuario:</label>
                        <input 
                            value={email}
                            onChange={handleEmailChange}
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
                            value={password}
                            onChange={handlePasswordChange}
                            name="clave" 
                            type="password"
                            id="login-password"
                            placeholder="Ingrese su clave"
                            required
                        />                      
                    </div>
                    <div className="cont2">
                        <button type="submit" className="btnlogin">
                            {loading ? "Validando" : "Login"} 
                        </button>
                        <span className="text-danger d-block"></span>                     
                    </div>
                </form>                                        
            </div> 
    </div>);
}