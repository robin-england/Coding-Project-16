export default function Profile({ name, role, photoURL }) {
    return (
        <div className="profile">
            <h2>{name}</h2>
            <p>{role}</p>
            <img src={photoURL} width={400} alt={`Profile of ${name}`}
            />
        </div>
    )
}