import "../assets/styles/scss/pages/_Register.scss";
import {useState} from 'react';
import {isSamePassword, isPasswordCorrect} from "../utils/authUtils.ts";

function Register() {
    const [password1, setPassword1]=useState<string>("");
    const [password2, setPassword2]=useState<string>("");

    function assignPasswords(setPassword:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void{
        setPassword(e.target.value.toString());
    }

    function checkPasswords(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(password1 + " ???? " + password2);
    }

    return (
        <main className="register-page">
            <h1>Inscription</h1>
            <form action="" method="post" onSubmit={checkPasswords}>
                <div className="register-page-fieldset">
                    <label htmlFor="email">Adresse mail : </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="username">Pseudo : </label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" id="password" name="password" onChange={(e) => assignPasswords(setPassword1, e)} required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="confirm-password">Confirmer le mot de passe : </label>
                    <input type="password" id="confirm-password" name="confirm-password" onChange={(e) => assignPasswords(setPassword2, e)} required />
                </div>
                <button type="submit">Se connecter</button>
                <p>Déjà un compte ? <a href="./connexion">Se connecter</a></p>
            </form>
        </main>
    )
}

export default Register