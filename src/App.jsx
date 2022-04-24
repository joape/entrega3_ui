import { Routes, Route } from "react-router-dom";
import { Header } from "./components/commons/Header";
import { Footer } from "./components/commons/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ItemDetail } from "./components/pages/ItemDetail";
import { LoginPage } from "./components/pages/LoginPage";
import { AltaProdPage } from "./components/pages/AltaProdPage";
import { AltaUserPage } from "./components/pages/AltaUserPage";
import { ListadoCategoria } from "./components/pages/ListadoCategoria";
import { ModProdPage } from "./components/pages/ModProdPage";

export function App() {
    return (
        <div className="contenedor">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<ItemDetail />} />
                    <Route path="/login/" element={<LoginPage />} />
                    <Route path="/producto/alta" element={<AltaProdPage />} />
                    <Route path="/producto/update/:id" element={<ModProdPage />} />
                    <Route path="/usuario/alta" element={<AltaUserPage />} />
                    <Route path="/categoria/:id" element={<ListadoCategoria />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}