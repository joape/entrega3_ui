import { Link } from "react-router-dom";

export function ArtItem(props){
 //const producto = props.producto; //aca paso TODO el objeto a la variable producto
 const id = props.id //obtengo el ID para pasar al JSON
 const codigo = props.codigo // aca llamo al atributo codigo del objeto producto
 const imagen = props.imagen // aca llamo al atributo imagen del objeto producto
 const ruta = './images/' + imagen
//console.log(id);
    return(
        <article className="articulo">
            <Link to={`/detail/${id}`} ><img src={ruta} alt="Servilleta1"></img></Link>
            <h2>Codigo: {codigo}</h2>
            <Link to={`/detail/${id}`} className="vermasbtn" >Ver Mas</Link>
        </article>
    );
}