function Register() {
    return (
        <main className="register-page">
            <h1>Inscription</h1>
            <form action="" method="post">
                <div className="register-page-fieldset">
                    <label htmlFor="email">Adresse mail : </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="username-page-fieldset">
                    <label htmlFor="username">Pseudo : </label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="register-page-fieldset">
                    <label htmlFor="confirm-password">Confirmer le mot de passe : </label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit">Se connecter</button>
                <p>Pas encore de compte ? <a href="./inscription">S'inscrire</a></p>
            </form>
        </main>
    )
}
  
export default Register