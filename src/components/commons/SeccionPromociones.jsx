import { useEffect, useState } from "react";
import { api } from "../../api/api";

export function SeccionPromociones(){

    const [Promocion, setPromocion] = useState([]);

    //Voy a buscar la informacion al servidor
    useEffect(() => {
        //Fetch / GET a JSON Servilletas
        api.get("/promociones/1").then(function (response) {
        const promo = response.data;
        //console.log(promo);        
        setPromocion(promo);//Cambiamos el estado para que react lo re dibuje
        });
    }, []);
    
    console.log(Promocion);
    const texto = Promocion.texto;
    
    return (
        <section className="promociones">
                <h2>{texto}</h2>
        </section>
    );
}