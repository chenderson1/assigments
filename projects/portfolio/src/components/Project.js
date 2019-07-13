import React from "react";

const Project = props => {
  const styleSpan = {
    color: "#7D5C83",
    borderRadius: "5px",
    marginRight: ".5vw",
    marginBottom: "1vh",
    padding: "2px"
  };

  const { imgURL, link, title, desc, tools, git } = props;
  const mappedTools = tools.map(tool => <span style={styleSpan}>#{tool}</span>);

  return (
    <div className="project-contianer">
      <a href={link} target="_blank">
        <img src={imgURL} alt="Avatar" />
      </a>

      <div className="project-list">
        <a href={link === "#" ? title : link} target="_blank">
          <h3>
            <b>{title}</b>
          </h3>
          <a href={link === "#" ? title : link} target="_blank">
            {link === "#" ? title : link}
          </a>
        </a>
        <p>{desc}</p>
        <a href={git} target="_blank">
          {git}
        </a>
        <div className="tools">{mappedTools}</div>
      </div>
    </div>
  );
};

export default Project;
