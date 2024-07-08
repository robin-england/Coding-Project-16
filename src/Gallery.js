import Profile from "./Profile.js";     // imports profile function

export default function Gallery({ teamMembers }) {  // Takes in team members
    return (
        <div className="gallery">
            {teamMembers.map(teamMember => (    // runs profile for each individual team member
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