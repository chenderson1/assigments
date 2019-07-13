import React from "react";

const Project = props => {
  const styleSpan = {
    color: "#7D5C83",
    borderRadius: "5px",
    marginRight: ".5vw",
    marginBottom: "1vh",
    padding: "2px"
  };

  const { imgURL, link, title, desc, tools } = props;
  const mappedTools = tools.map(tool => <span style={styleSpan}>#{tool}</span>);
  return (
    <a href={link} target="_blank">
      <div className="project-contianer">
        <img src={imgURL} alt="Avatar" />
        <div className="project-list">
          <h3>
            <b>{title}</b>
          </h3>
          <a href={link} target="_blank">
            {link}
          </a>
          <p>{desc}</p>
          <div className="tools">{mappedTools}</div>
        </div>
      </div>
    </a>
  );
};

export default Project;
