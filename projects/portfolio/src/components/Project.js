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
    <a href={link} avatar="project" target="_blank">
      <div
        style={{
          width: "300px",
          height: "500px",
          backgroundColor: "black",
          opacity: "0.5",
          color: "white",
          borderRadius: "9px",
          boxShadow: "1px 1px 20px black"
        }}
      >
        <img
          src={imgURL}
          alt="Avatar"
          style={{
            width: "100%",
            height: "200px",
            borderTopRightRadius: "9px",
            borderTopLeftRadius: "9px",
            marginBottom: ".5vh"
          }}
        />
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexFlow: "column",
            alignContent: "space-between"
          }}
        >
          <h3 style={{ marginBottom: "2vh" }}>
            <b style={{ color: "#50AF6F" }}>{title}</b>
          </h3>
          <a
            style={{
              color: "#EFB21E",
              textDecoration: "none"
            }}
            href={link}
            target="_blank"
          >
            {link}
          </a>
          <p style={{ marginBottom: "1vh", marginTop: "1vh" }}>{desc}</p>
          <div
            style={{
              width: "100%",
              overflowWrap: "break-word",
              padding: "3px"
            }}
          >
            {mappedTools}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
