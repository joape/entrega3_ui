import { HeaderSeccion } from "../commons/HeaderSeccion";
import { SeccionPromociones } from "../commons/SeccionPromociones";
import { SeccionLogin } from "../commons/SeccionLogin";

export function LoginPage(){
    return(
        <>
            <HeaderSeccion />
            <SeccionPromociones />
            <SeccionLogin />
        </>
    );
}