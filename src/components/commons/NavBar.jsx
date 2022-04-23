import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { NavBarItem } from "./NavBaritem";

export function NavBar() {

    const [listadoCategorias, setListadoCategorias] = useState([]);
    useEffect(() => {
        api.get('/categorias').then((response) => { //Fetch / GET a JSON Servilletas antes, ahora a la API que se conecta a la BBDD
            const categorias = response.data;
            setListadoCategorias(categorias); //Cambio el estado para que react lo re dibuje con lo que trajo de la API      
        });
    }, [])/*Pongo un array vacio al final para que se ejecute una sola vez */

    /*Funcion que mapea cada elemento del array*/
    const listItems = listadoCategorias.map(function (categ) {
        return (<NavBarItem key={categ.id_categoria} id={categ.id_categoria} nombre={categ.nombre} />);/*Paso id y nombre*/
    });

    return (
        <nav>
            <ul>
                {listItems} {/*Aca llamo a la funcion que esta encima que genera un listItem por cada elemento del array*/}
            </ul>
        </nav>
    );

}