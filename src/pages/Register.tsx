import "../assets/styles/scss/pages/_Register.scss";
import { useState } from 'react';
import { register } from "../api/fetchUtils.ts";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { isSamePassword, isPasswordCorrect } from "../utils/authUtils.ts";
import config from "../../config.ts";

function Register() {
    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
    const [status, setStatus] = useState<string | null>(null);
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const url = 'http://localhost:3000/api/v1/auth/signup';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validPassword = isPasswordCorrect(password1);
        const matchingPasswords = isSamePassword(password1, password2);

        setIsPasswordValid(validPassword);
        setDoPasswordsMatch(matchingPasswords);

        if (!validPassword || !matchingPasswords) return;

        setStatus('Loading');

        try {
            const { data, errorFetch, status } = await register(url, { email, pseudo, password: password1 });

            if (status === "success") {
                Cookies.set('refreshToken', data.refreshToken, { sameSite: 'Strict', secure: true });
                Cookies.set('accessToken', data.accessToken, { sameSite: 'Strict', secure: true });
                setLoginError(false);
                navigate("/connexion");
            } else {
                setLoginError(true);
            }
        } catch (error) {
            console.error("Registration error:", error);
            setLoginError(true);
        }
    };

    return (
        <main className="register-page">
            <h1>Inscription</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className="register-page-fieldset">
                    <label htmlFor="email">Adresse mail :</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="username">Pseudo :</label>
                    <input type="text" id="username" name="username" onChange={(e) => setPseudo(e.target.value)} required />
                </div>
                <div className={`register-page-fieldset ${isPasswordValid ? "" : "error"}`}>
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword1(e.target.value)}
                        required
                    />
                    {!isPasswordValid && <p className="password-incorrect"></p>}
                </div>
                <div className={`register-page-fieldset ${doPasswordsMatch ? "" : "error"}`}>
                    <label htmlFor="confirm-password">Confirmer le mot de passe :</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                    {!doPasswordsMatch && <p className="password-no-same"></p>}
                </div>
                <button type="submit">S'inscrire</button>
                {loginError && <p className="login-error">Échec de l'inscription. Veuillez réessayer.</p>}
                <p>Déjà un compte ? <a href="./connexion">Se connecter</a></p>
            </form>
        </main>
    );
}

export default Register;
