import { HeaderSeccion } from "../commons/HeaderSeccion";
import { SeccionPromociones } from "../commons/SeccionPromociones";
import { SeccionAltaProd } from "../commons/SeccionAltaProd";

export function AltaProdPage(){
    return(
        <>
            <HeaderSeccion />
            <SeccionPromociones />
            <SeccionAltaProd />
        </>
    );
}