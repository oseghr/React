import React from "react";

function Project(props) {
  return (
    <div className="card">
      <img
        className="card-info"
        src={`https://picsum.photos/350/200?random=${props.img}`}
        alt="project-images"
      />

      <p>name</p>
      <p>email</p>
    </div>
  );
}

export default Project;
