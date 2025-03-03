import "../assets/styles/scss/pages/_Login.scss";
import { useState } from "react";
import { login } from "../api/fetchUtils.ts";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import config from '../../configProd.ts';

function Login() {
    //Initiate link with API
    const url = `${config.API_URL}/v1/auth/login`;

    //Initiate variables for login
    const navigate = useNavigate();
    const [email, setEmail]= useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [data, setData] = useState<string | null>(null);
    const [errorFetch, setErrorFetch] = useState<Error| unknown |null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const [loginError, setLoginError] = useState<boolean>(false);

    const assignLoginData = (setData:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void =>{
        setData(e.target.value.toString());
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Loading');
        try{
            const {data, errorFetch, status} = await login(url, {email, password});
            if(status === "success"){
                setLoginError(false);
                Cookies.set('refreshToken', data.refreshToken, {SameSite: 'strict', secure:true});
                Cookies.set('accessToken', data.accessToken, {SameSite: 'strict', secure:true});
                sessionStorage.setItem('slayerId', data.slayer.id);
                sessionStorage.setItem('slayerEmail', data.slayer.email);
                sessionStorage.setItem('slayerPseudo', data.slayer.pseudo);
                sessionStorage.setItem('slayerIsAdmin', data.slayer.isAdmin);
                sessionStorage.setItem('slayerAvatar', data.slayer.avatar);
                sessionStorage.setItem('slayerRole', data.slayer.role);
                sessionStorage.setItem('slayerPronouns', data.slayer.pronouns);
                sessionStorage.setItem('slayerisSearching', data.slayer.isSearching);
                sessionStorage.setItem('slayergeolocationId', data.slayer.geolocationId);
                sessionStorage.setItem('slayerAvatar', data.slayer.geolocation);
                navigate('/profil');
                window.location.reload();
            }else{
                setLoginError(true);
            }
        }catch(error){
            console.error("Login error:", error);
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
                <p>Pas encore de compte ? <Link to="/inscription">S'inscrire</Link></p>
            </form>
        </main>
    )
}

export default Login