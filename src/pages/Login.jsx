import { useEffect, useState } from "react";
import styles from "../style/Login.module.css";
import { useAuth } from "../context/FakeAuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("abdo@example.com");
    const [password, setPassword] = useState("testing");
    const { login, isAuthenticated } = useAuth();
    function handelSubmit(e) {
        e.preventDefault();
        if (email && password) login(email, password);
    }
    useEffect(function () {
        if (isAuthenticated) {
            navigate("/app/cities", { replace: true })
        }
    }, [isAuthenticated])
    return (
        <main className={styles.login}>
            <form className={styles.form} onSubmit={handelSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    {/* <button>Login</button> */}
                    <Button type={"primary"}>login</Button>
                </div>
            </form>
        </main>
    );
}