import React from "react";

import './style.css'

function DevItem({ dev, deleteDev }) {

  async function handleDeletion(e, github_username ){
    e.preventDefault();

    await deleteDev({
      github_username,
    });
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Access Github Profile
      </a>
      <button>Edit Profile</button>
      <button onClick={(e) => handleDeletion(e, dev.github_username)}>Delete</button>
    </li>
  );
}

export default DevItem;
