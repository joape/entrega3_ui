import { useState } from "react";
import { api } from "../../api/api";

export function SeccionAltaUsuario() {

    //defino las variables para los estados - Me permite redibujar en el formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    const [opcion, setOpcion] = useState("");

    const [loading, setLoading] = useState(false); //uso este estado para cambiar boton.
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    //El formulario se manda
    const handleSubmit = (event) => {
        event.preventDefault(); //detengo el comportamiento por default
        //console.log(categoria, codigo, origen, tamaño, stock, precio, foto);

        //Creo el form data
        const data = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password,
            confpass: confPass,
            opcion: opcion
        };

        //Cambiar el estado loading a true para que se dibuje y muestre "Enviando"
        setLoading(true);

        //Borramos el error
        setError("");
        setMensaje("");

        //Llamar un POST con axios a /login y mandar la info en el estado actual. 
        api.post("/usuarios", data).then(
            (response) => {
                const respuesta = response.data; //capturo la respuesta de la API
                //console.log(respuesta);
                //Cambiar el estado de loading a false cuando me responde OK la API
                setLoading(false);

                //borro los inputs si esta todo ok
                setNombre("");
                setApellido("");
                setEmail("");
                setPassword("");
                setConfPass("");
                setOpcion("");

                //Muestro el mensaje
                setMensaje(respuesta.message); ///podria usar response.data.message.
                window.location.href = "/login";
            },
            (errorResponse) => {
                //console.log(errorResponse.response.data);
                //Guardamos la respuesta de la api en una constante
                const response = errorResponse.response.data;

                //Cambiamos el estado para mostrar el error
                setError(response.error);

                //Cambiar el estado loading a false
                setLoading(false);
            });
    };

    //Maneja estados del Formulario
    const handleNameChange = (event) => { //aca manejo que se redibuje la categoria (componente controlado)
        setNombre(event.target.value); //target hace referencia al input que origino el evento. Por eso pedimos el value
    };

    const handleApellidoChange = (event) => {
        setApellido(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfPassChange = (event) => {
        setConfPass(event.target.value);
    };

    const handleOpcionChange = (event) => {
        setOpcion(!opcion);
    };

    return (<div className="login">
        <div className="login caja">
            <form onSubmit={handleSubmit}>
                <h2 className="titulo">ALTA USUARIO</h2>
                <div className="cont">
                    <label htmlFor="formuser-name">Nombre:</label>
                    <input
                        value={nombre}
                        onChange={handleNameChange}
                        name="nombre"
                        type="text"
                        id="formuser-name"
                        placeholder="Ingrese nombre"
                        required
                    />
                </div>
                <div className="cont">
                    <label htmlFor="formuser-lastname">Apellido:</label>
                    <input
                        value={apellido}
                        onChange={handleApellidoChange}
                        name="apellido"
                        type="text"
                        id="formuser-lastname"
                        placeholder="Ingrese apellido"
                        required
                    />
                </div>
                <div className="cont">
                    <label htmlFor="formuser-email">Email:</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        name="email"
                        type="email"
                        id="formuser-email"
                        placeholder="Ingrese Email"
                        required
                    />
                </div>
                <div className="cont">
                    <label htmlFor="formuser-password">Password:</label>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        name="password"
                        type="password"
                        id="formuser-password"
                        placeholder="Ingrese password"
                        required
                    />
                </div>
                <div className="cont">
                    <label htmlFor="formuser-confpass">Conf. Password:</label>
                    <input
                        value={confPass}
                        onChange={handleConfPassChange}
                        name="confpass"
                        type="password"
                        id="formuser-confpass"
                        placeholder="Confirme password"
                        required
                    />
                </div>
                <div className="cont">
                    <label htmlFor="formuser-tipo">Es Admin:</label>
                    <input
                        type="checkbox"
                        value='1'
                        onChange={handleOpcionChange}
                        name="opcion"
                        id="formuser-tipo"
                        checked={opcion}
                    />
                </div>
                <div className="cont2">
                    <button type="submit" className="btnlogin">
                        {loading ? "Guardando" : "Guardar"}
                    </button>
                </div>
                <div className="cont2">
                    <span>{error}</span>
                </div>
                <div className="mensajeOK">
                    <span>{mensaje}</span>
                </div>
            </form>
        </div>
    </div>);
}