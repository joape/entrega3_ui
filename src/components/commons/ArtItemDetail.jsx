import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

export function ArtItemDetail(){//aca se va a conectar a la BBDD y traera los productos
    
    //capturo el parametro. Si saco el id de entre las llaves no carga las imagenes 
    //porque estoy pasando un objeto
    const {id} = useParams(); 
    //console.log(id)//
    
    const [Producto, setProducto] = useState([]);
        
    //Voy a buscar la informacion al servidor
    useEffect(() => {
        //Fetch / GET a JSON Servilletas
        api.get("/productos/" + id).then(function (response) {
        const prod = response.data;
        //console.log(prod);        
        setProducto(prod);//Cambiamos el estado para que react lo re dibuje
        });
    }, []);

    //console.log(Producto.id);

    const codigo = Producto.codigo;
    const origen = Producto.origen;
    const ruta = Producto.imagen;
    const imagen = <img src={"/images/" + ruta} alt="servilleta1"></img>;
    const tam = Producto.tamaño;
    const cant = Producto.cantidad;
    const precio = Producto.precio;
console.log(imagen);
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
            </ul>
        </article> 
    </div>       
    );
}