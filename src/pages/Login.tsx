import "../assets/styles/scss/pages/_Login.scss";

function Login() {
    return (
        <main className="login-page">
            <h1>Connexion</h1>
            <form action="" method="post">
                <div className="login-page-fieldset">
                    <label htmlFor="email">Adresse mail : </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="login-page-fieldset">
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Se connecter</button>
                <p>Pas encore de compte ? <a href="./inscription">S'inscrire</a></p>
            </form>
        </main>
    )
}

export default Login