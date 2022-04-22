import { Routes, Route } from "react-router-dom";
import { Header } from "./components/commons/Header";
import { Footer } from "./components/commons/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ItemDetail } from "./components/pages/ItemDetail";
import { LoginPage } from "./components/pages/LoginPage";
import { AltaProdPage } from "./components/pages/AltaProdPage";
import { AltaUserPage } from "./components/pages/AltaUserPage";

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
                    <Route path="/usuario/alta" element={<AltaUserPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}