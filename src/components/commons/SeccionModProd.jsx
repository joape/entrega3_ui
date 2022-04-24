import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SeccionModProd() {
  let navigate = useNavigate();
  const isAdmin = localStorage.getItem("admin") === "1"; //Traigo el token de la LocalStorage

  if (!isAdmin) {
    navigate("/", { replace: true });
  }

  //capturo el parametro. Si saco el id de entre las llaves no carga las imagenes
  //porque estoy pasando un objeto
  const { id } = useParams();
  //console.log(id)//

  //defino las variables para los estados - Nos permite redibujar en el formulario
  const [categoria, setCategoria] = useState(""); ///este es el del select
  const [options, setOptions] = useState([]); /// este es para manejar las opciones del select
  const [codigo, setCodigo] = useState("");
  const [origen, setOrigen] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState("");
  const [loading, setLoading] = useState(false); //uso este estado para cambiar boton.
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    api.get("/categorias").then(
      (response) => {
        //Fetch / GET a JSON Servilletas antes, ahora a la API que se conecta a la BBDD
        const categorias = response.data;
        setOptions(categorias); ///podria usar response.data.message.
      },
      (errorResponse) => {
        //console.log(errorResponse.response.data);
        //Guardamos la respuesta de la api en una constante
        const response = errorResponse.response.data;

        //Cambiamos el estado para mostrar el error
        setError(response.error);

        //Cambiar el estado loading a false
        setLoading(false);
      }
    );

    //Fetch / GET al producto
    api.get("/productos/" + id).then(
      function (response) {
        const prod = response.data;
        //console.log(prod);

        setCategoria(prod.id_categoria); ///este es el del select
        setCodigo(prod.codigo);
        setOrigen(prod.origen);
        setTamaño(prod.tamaño);
        setStock(prod.stock);
        setPrecio(prod.precio);
        setImagen(prod.imagen);
      },
      (errorResponse) => {
        //console.log(errorResponse.response.data);
        //Guardamos la respuesta de la api en una constante
        const response = errorResponse.response.data;

        //Cambiamos el estado para mostrar el error
        setError(response.error);

        //Cambiar el estado loading a false
        setLoading(false);
      }
    );
  }, [id]); /*Pongo un array vacio al final para que se ejecute una sola vez */

  if (!categoria) {
    return "Cargando";
  }

  //El formulario se manda
  const handleSubmit = (event) => {
    event.preventDefault(); //detengo el comportamiento por default
    //console.log(categoria, codigo, origen, tamaño, stock, precio, foto);

    //Creo el form data
    const formData = new FormData();
    formData.append("id_categoria", categoria);
    formData.append("codigo", codigo);
    formData.append("origen", origen);
    formData.append("tamaño", tamaño);
    formData.append("stock", stock);
    formData.append("precio", precio);
    formData.append("foto", foto);

    //Cambiar el estado loading a true para que se dibuje y muestre "Enviando"
    setLoading(true);

    //Borramos el error
    setError("");
    setMensaje("");

    //Llamar un PUT con axios a /login y mandar la info en el estado actual.
    api.put("/productos/" + id, formData).then(
      (response) => {
        const respuesta = response.data;
        console.log(respuesta);
        //Cambiar el estado de loading a false cuando me responde OK la API
        setLoading(false);

        setMensaje(respuesta.message); ///podria usar response.data.message.

        if (respuesta.datos.imagen) {
          setImagen(respuesta.datos.imagen);
        }
      },
      (errorResponse) => {
        //console.log(errorResponse.response.data);
        //Guardamos la respuesta de la api en una constante
        const response = errorResponse.response.data;

        //Cambiamos el estado para mostrar el error
        setError(response.error);

        //Cambiar el estado loading a false
        setLoading(false);
      }
    );
  };

  //Maneja estados del Formulario
  const handleCategoriaChange = (event) => {
    //aca manejo que se redibuje la categoria (componente controlado)
    setCategoria(event.target.value); //target hace referencia al input que origino el evento. Por eso pedimos el value
  };

  const handleCodigoChange = (event) => {
    //aca manejo que se redibuje el codigo (componente controlado)
    setCodigo(event.target.value);
  };

  const handleOrigenChange = (event) => {
    //aca manejo que se redibuje el origen (componente controlado)
    setOrigen(event.target.value);
  };

  const handleTamañoChange = (event) => {
    //aca manejo que se redibuje el Tamaño (componente controlado)
    setTamaño(event.target.value);
  };

  const handleStockChange = (event) => {
    //aca manejo que se redibuje el Stock (componente controlado)
    setStock(event.target.value);
  };

  const handlePrecioChange = (event) => {
    //aca manejo que se redibuje el Precio (componente controlado)
    setPrecio(event.target.value);
  };

  const handleFotoChange = (event) => {
    const fileSelected = event.target.files[0];
    setFoto(fileSelected);
  };

  return (
    <div className="login">
      <div className="login caja">
        <form onSubmit={handleSubmit}>
          <h2 className="titulo">MODIFICACION DE PRODUCTO</h2>
          <div className="cont">
            <label htmlFor="prod-categoria">Categoria:</label>
            <select
              onChange={handleCategoriaChange}
              value={categoria}
              name="categoria"
              id="prod-categoria"
              required
            >
              <option value="">Seleccionar categoria</option>
              {options.map((option) => (
                <option key={option.id_categoria} value={option.id_categoria}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="cont">
            <label htmlFor="prod-code">Codigo:</label>
            <input
              value={codigo}
              onChange={handleCodigoChange}
              name="codigo"
              type="text"
              id="prod-code"
              placeholder="Ingrese Codigo Producto"
              required
            />
          </div>
          <div className="cont">
            <label htmlFor="prod-origen">Origen:</label>
            <input
              value={origen}
              onChange={handleOrigenChange}
              name="origen"
              type="text"
              id="prod-origen"
              placeholder="Ingrese el Origen"
              required
            />
          </div>
          <div className="cont">
            <label htmlFor="prod-tamaño">Tamaño:</label>
            <input
              value={tamaño}
              onChange={handleTamañoChange}
              name="tamaño"
              type="text"
              id="prod-tamaño"
              placeholder="Ingrese el Tamaño"
              required
            />
          </div>
          <div className="cont">
            <label htmlFor="prod-stock">Stock:</label>
            <input
              value={stock}
              onChange={handleStockChange}
              name="stock"
              type="number"
              id="prod-stock"
              placeholder="Ingrese la cantidad en stock"
              required
            />
          </div>
          <div className="cont">
            <label htmlFor="prod-stock">Precio:</label>
            <input
              value={precio}
              onChange={handlePrecioChange}
              name="Precio"
              type="number"
              id="prod-precio"
              placeholder="Ingrese el precio"
              required
            />
          </div>
          <div className="cont">
            <label htmlFor="prod-imagen">Imagen:</label>
            <input
              onChange={handleFotoChange}
              type="file"
              accept="image/png, image/jpeg"
              name="foto"
              id="prod-foto"
              placeholder="Ingresa una foto"
            />
            <div>
              <img
                src={"http://localhost:4000/uploads/" + imagen}
                alt="Imagen no carga"
                height="50px"
                width="50px"
              ></img>
            </div>
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
    </div>
  );
}
