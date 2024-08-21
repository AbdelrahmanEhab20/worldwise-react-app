import styles from '../style/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright by {new Date().getFullYear()} by WorldWise Inc.
            </p>
        </footer>
    )
}

export default Footer
