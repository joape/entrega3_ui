import { Link } from "react-router-dom";

export function ArtItem(props) {
    const id = props.id; //obtengo el ID para pasar al JSON
    const codigo = props.codigo; // aca llamo al atributo codigo del objeto producto
    const imagen = props.imagen; // aca llamo al atributo imagen del objeto producto
    const alt = props.alt;
    const ruta = "http://localhost:4000/uploads/" + imagen;
    //console.log(id);
    return (
        <article className="articulo">
            <Link to={`/detail/${id}`} ><img src={ruta} alt={alt}></img></Link>
            <h2>Codigo: {codigo}</h2>
            <Link to={`/detail/${id}`} className="vermasbtn" >Ver Mas</Link>
        </article>
    );
}