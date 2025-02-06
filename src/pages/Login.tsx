import "../assets/styles/scss/pages/_Login.scss";
import { useState } from "react";
import { login } from "../api/fetchUtils.ts";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import config from "../../config.ts";

function Login() {
    const [email, setEmail]= useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [data, setData] = useState<string | null>(null);
    const [errorFetch, setErrorFetch] = useState<Error| unknown |null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const url = `${config}/v1/auth/login`;
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState<boolean>(false);

    const assignLoginData = (setData:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void =>{
        setData(e.target.value.toString());
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Loading');

        const {data, errorFetch, status} = await login(url, {email, password});

        setData(data);
        setErrorFetch(errorFetch);
        setStatus(status);

        console.log(data);
        console.log(status);

        if(status === "success"){
            setLoginError(false);
            Cookies.set('refreshToken', data.refreshToken, {SameSite: 'strict', secure:true});
            Cookies.set('accessToken', data.accessToken, {SameSite: 'strict', secure:true});
            navigate("/profil");
        }

        if(status === "error"){
            setLoginError(true);
        }

    }

    return (
        <main className="login-page">
            <h1>Connexion</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                {loginError && <p className="login-error">Votre adresse mail et/ou votre mot de passe est incorrect.</p>}
                <div className="login-page-fieldset">
                    <label htmlFor="email">Adresse mail : </label>
                    <input type="email" id="email" name="email" onChange={(e) => assignLoginData(setEmail, e)} required />
                </div>
                <div className="login-page-fieldset">
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" id="password" name="password" onChange={(e)=>{assignLoginData(setPassword,e)}}required />
                </div>
                <button type="submit">Se connecter</button>
                <p>Pas encore de compte ? <a href="./inscription">S'inscrire</a></p>
            </form>
        </main>
    )
}

export default Login