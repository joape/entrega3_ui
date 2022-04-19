import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { ArtItem } from "./ArtItem";
//aca se va a conectar a la BBDD y traera los productos

export function ArtList(){
    
    const [listadoProds, setListadoProds] = useState([]);
   
    //Voy a buscar la informacion al servidor
    useEffect(() => {
        //Fetch / GET a JSON Servilletas antes, ahora a la API que se conecta a la BBDD
        api.get("/productos").then((response)=> {
        const prods = response.data;
       
        //Cambiamos el estado para que react lo re dibuje con lo que trajo de la API
        setListadoProds(prods);
        });
    }, []);/*Pongo un array vacio al final para que se ejecute una sola vez */

    /*Funcion que mapea cada elemento del array*/
    const artItems = listadoProds.map(function (prod) {   
        return(
         <ArtItem key={prod.id} id={prod.id_producto} codigo={prod.codigo} imagen={prod.imagen} />);/*Aca a cada item de ArtItem le pasaba el objeto entero, no es necesario, solo se pasa id, codigo e imagen*/
    });
   
    return(
        <div className="articulos">                    
                {artItems}     {/*Aca llamo a la funcion que esta encima que genera una artItem por cada elemento del array*/}      
        </div>
    );  
}