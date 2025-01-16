import "../assets/styles/scss/components/_ProfileBiography.scss";

interface WrapperProps {

    className: string
}

function ProfileBiography(props: WrapperProps) {
    return (
        <section className={`profile-biography ${props.className}`} >
            <p>Plus grand streameur du monde et super musicien aguerrie, j’aime faire des musiques décalées. #fifou</p>
        </section>
    )
}

export default ProfileBiography