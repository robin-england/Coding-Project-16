import { Profile } from "Profile";

export default function Gallery({teamMembers}){
    return (
      <div className="gallery">
        {teamMembers.map(teamMember =>(
          <Profile
            key={teamMember.id}
            name={teamMember.name}
            position={teamMember.role}
            photoURL={teamMember.photo}
        />
      ))}    
      </div>
    )
}