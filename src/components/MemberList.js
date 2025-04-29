// Shows list of users with avatars
import React from 'react';

const members = [
  { name: 'Kate Mara', avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Ryan Lewis', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Senthil Kumar', avatar: 'https://i.pravatar.cc/40?img=3' }
];

function MembersList() {
  return (
    <div className="card p-3">
      <h5>Members</h5>
      <ul className="list-unstyled">
        {members.map((m, i) => (
          <li key={i} className="d-flex align-items-center mb-2">
            <img src={m.avatar} alt={m.name} className="rounded-circle me-2" />
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersList;