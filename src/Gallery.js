import Profile from "./Profile.js";

export default function Gallery({ teamMembers }) {
    return (
        <div className="gallery">
            {teamMembers.map(teamMember => (
                <Profile
                    key={teamMember.id}
                    name={teamMember.name}
                    role={teamMember.role}
                    photoURL={teamMember.photoURL}
                />
            ))}
        </div>
    )
}