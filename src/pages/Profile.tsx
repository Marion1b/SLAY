import SlayButton from "../components/SlayButton";
import NumbersInfos from "../components/NumbersInfos";

function Profile() {

    return (
        <section className="profile-page">
            <h1>Profil</h1>
            <SlayButton slay={false} />
            <NumbersInfos reposts={4500} slayers={3200} suivis={439} />
        </section>
    )
}
export default Profile