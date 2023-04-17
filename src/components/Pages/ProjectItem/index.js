import React from "react";

function ProjectItem(props) {
  const imgStyle = {
    height: "200px !important;",
    width: "auto !important;"
  };
  const cardStyle = {
    width: "20%;"
  }
  return (
    <div className="card border-info m-3" style={{width: "30%"}}>
      <img src={props.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} target="_blank" className="btn btn-primary">View App</a>
        <a href={props.repo} target="_blank" className="btn btn-primary">Repo</a>
      </div>
    </div>
  );
}

export default ProjectItem;