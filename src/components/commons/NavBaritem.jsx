import { Link } from "react-router-dom";

export function NavBarItem(props) {
    const id = props.id //obtengo el ID 
    const nombre = props.nombre // aca llamo al atributo nombre del objeto producto
    //console.log(props.id);
    return (
        <li><Link to={`/categoria/${id}`}>{nombre}</Link></li>
    );
}