import styles from "../style/Sidebar.module.css";
import AppNav from "../components/AppNav";
import Logo from "../components/Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />

            <Footer />
        </div>
    )
}

export default Sidebar
