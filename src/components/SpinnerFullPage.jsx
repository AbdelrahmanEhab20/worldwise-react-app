import Spinner from "./Spinner";
import styles from "../style/SpinnerFullPage.module.css";

function SpinnerFullPage() {
    return (
        <div className={styles.spinnerFullPage}>
            <Spinner />
        </div>
    );
}

export default SpinnerFullPage;