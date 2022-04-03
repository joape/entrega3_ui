import { Routes, Route } from "react-router-dom";
import { Header } from "./components/commons/Header";
import { Footer } from "./components/commons/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ItemDetail } from "./components/pages/ItemDetail";

export function App(){
    return(
        <div className="contenedor">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<ItemDetail />} />            
                </Routes>
            </main>
            <Footer />
        </div>
    );
}