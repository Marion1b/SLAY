import "../assets/styles/scss/components/Searchbar.scss";

function Searchbar(){
    return(
        <form className="searchbar-form" method="get" action="">
            <label htmlFor="search" hidden>Recherche</label>
            <input type="search" id="search" name="search" placeholder="Recherche"/>
        </form>
    )
}

export default Searchbar;