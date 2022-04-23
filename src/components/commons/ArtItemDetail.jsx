import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import btn_edicion from "../../assets/images/icono-editar-50.png"
import btn_borrar from "../../assets/images/icono-eliminar-50.png"
import { useNavigate } from 'react-router-dom';

export function ArtItemDetail() {//aca se va a conectar a la BBDD y traera los productos
    let navigate = useNavigate();
    const isAdmin = localStorage.getItem("admin") == "1"; //Traigo el token de la LocalStorage

    //capturo el parametro. Si saco el id de entre las llaves no carga las imagenes 
    //porque estoy pasando un objeto
    const { id } = useParams();
    //console.log(id)//

    const [Producto, setProducto] = useState("");

    //Voy a buscar la informacion al servidor
    useEffect(() => {
        //Fetch / GET a JSON Servilletas
        api.get("/productos/" + id).then(function (response) {
            const prod = response.data;
            //console.log(prod);        
            setProducto(prod);//Cambiamos el estado para que react lo re dibuje
        });
    }, []);

    if (!Producto) {
        return "Cargando";
    }
    //console.log(Producto.id);

    const codigo = Producto.codigo;
    const origen = Producto.origen;
    const ruta = Producto.imagen;
    const imagen_original = Producto.imagen_original;
    const imagen = <img src={"http://localhost:4000/uploads/" + ruta} alt={imagen_original} height="50px" width="50px"></img>;
    const tam = Producto.tamaño;
    const cant = Producto.cantidad;
    const precio = Producto.precio;
    // console.log(imagen);

    const handleButtonEdit = () => {

    }

    const handleButtonDel = () => {

        api.delete("/productos/" + id).then(function () {

            navigate('/', { replace: true });
        });

    }

    return (
        <div className="articulos">
            <article className="articulo">
                {imagen}
                <h2>Codigo: {codigo}</h2>
                <Link to="#" className="agregarCarroBtn" >Agregar al Carro</Link>
            </article>
            <article className="detalle">
                <ul>
                    <li>Origen: {origen}</li>
                    <li>Tamaño: {tam} cm</li>
                    <li>Cantidad Stock: {cant} uni</li>
                    <li>Precio: $U{precio}</li>
                    {/*TODO:Aca se deben mostrar los iconos de Edicion y Borrar si el user es tipo admin
                    Desde aca ademas hara el link a la edicion y borrado de producto*/}
                    {isAdmin ? <li>
                        <button onClick={handleButtonEdit}><img src={btn_edicion} alt="Editar" /></button> <button onClick={handleButtonDel}><img src={btn_borrar} alt="Borrar" /></button></li> : <li></li>}
                </ul>
            </article>
        </div>
    );
}