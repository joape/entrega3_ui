import logo from '../../assets/images/logo.png'
import menu_burger from '../../assets/images/Menú-hamburguesa900x753.png'
import lupa from '../../assets/images/lupa-de-busqueda.png'
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';

export function Header() {
    const token = localStorage.getItem("token"); //Traigo el token de la LocalStorage

    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <header>
            <Link to="/"><img src={logo} alt="Logo Decoupage Online"></img></Link>
            <img className="menu_burger" src={menu_burger} alt="categorias"></img>
            <NavBar />
            <div className="search">
                <img src={lupa} alt="Ingrese codigo de servilleta"></img>
                <input name="buscar" type="text"></input>
            </div>
            <div clasename="search"><Link to="/usuario/alta">Registrarse</Link></div>
            <div className="search">{token ? <a href="#" onClick={logout}>Logout</a> : <Link to="/login">Login</Link>}</div>
        </header>
    );
}