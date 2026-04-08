import { Outlet } from "react-router";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import SideBar from "../components/SideBar";

export function MainLayout() {
    return (
        <div>
            <Header/>
            <SideBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}