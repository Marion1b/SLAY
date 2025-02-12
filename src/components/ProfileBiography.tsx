import "../assets/styles/scss/components/_ProfileBiography.scss";

interface WrapperProps {
    className: string;
    content: string | null;
}

function ProfileBiography(props: WrapperProps) {
    return (
        <section className={`profile-biography ${props.className}`} >
            {props.content !== "null" && 
            <p>{props.content}</p>}
        </section>
    )
}

export default ProfileBiography