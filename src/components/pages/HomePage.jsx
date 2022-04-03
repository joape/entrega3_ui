import { HeaderSeccion } from "../commons/HeaderSeccion";
import { SeccionPromociones } from "../commons/SeccionPromociones";
import { ArtList } from "../commons/ArtList";

export function HomePage(){
    return(
        <>
            <HeaderSeccion />
            <SeccionPromociones />
            <ArtList />
        </>
    );
}