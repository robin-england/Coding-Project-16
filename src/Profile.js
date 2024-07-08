export default function Profile({ name, role, photoURL }) { // Creates Profile for each person, taking in their name, role and photo
    return (
        <div className="profile">
            <h2>{name}</h2>
            <p>{role}</p>
            <img src={photoURL} width={400} alt={`Profile of ${name}`}  // sets width of picture
            />
        </div>
    )
}