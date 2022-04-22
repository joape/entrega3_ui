import { HeaderSeccion } from "../commons/HeaderSeccion";
import { SeccionPromociones } from "../commons/SeccionPromociones";
import { SeccionAltaUsuario } from "../commons/SeccionAltaUsuario";

export function AltaUserPage() {
    return (
        <>
            <HeaderSeccion />
            <SeccionPromociones />
            <SeccionAltaUsuario />
        </>
    );
}