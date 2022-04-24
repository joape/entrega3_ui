import { HeaderSeccion } from "../commons/HeaderSeccion";
import { SeccionPromociones } from "../commons/SeccionPromociones";
import { Catlist } from "../commons/CatList";

export function ListadoCategoria() {
    return (
        <>
            <HeaderSeccion />
            <SeccionPromociones />
            <Catlist />
        </>
    );
}
