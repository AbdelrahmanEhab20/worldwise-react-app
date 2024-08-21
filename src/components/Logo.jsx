import { Link } from "react-router-dom";
import styles from "../style/Logo.module.css";
import logoImage from "../assets/logo.png";

function Logo() {
    return (
        <Link to="/">
            <img src={logoImage} alt="WorldWise logo" className={styles.logo} />
        </Link>
    );
}

export default Logo;