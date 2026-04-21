import { Outlet } from "react-router";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export function ProductLayout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}