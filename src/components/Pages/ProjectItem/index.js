import React from "react";

function ProjectItem(props) {
  return (
    <div>
      <h2 className="title">Projects:</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card border-info mb-3 mx-auto align-items-center">
              <img src={props.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} target="_blank" className="btn btn-primary">View App</a>
                <a href={props.repo} target="_blank" className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;