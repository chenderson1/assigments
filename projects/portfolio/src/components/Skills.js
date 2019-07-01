import React from "react";
import jsLogo from "../resources/skill_icons/iconfinder_code-programming-javascript-software-develop-command-language_652581.svg";
import reactLogo from "../resources/skill_icons/iconfinder_React.js_logo_1174949.svg";
import nodeLogo from "../resources/skill_icons/iconfinder_233_Node_Js_logo_4375017.svg";
import htmlLogo from "../resources/skill_icons/iconfinder_html5_395261.svg";
import cssLogo from "../resources/skill_icons/iconfinder_css3_2916226.svg";
import mongoLogo from "../resources/skill_icons/iconfinder_mongodb_1012822.svg";
import gitLogo from "../resources/skill_icons/iconfinder_social_media_social_media_logo_git_2993773.svg";
import jwtLogo from "../resources/skill_icons/jwt.svg";
import NavBar from "./NavBar";

const Skills = () => {
  const style = {
    color: "#7D5C83",
    fontWeight: "bold",
    fontFamily: "Open Sans Condensed",
    fontSize: "1.2rem"
  };
  const styleLogo = {
    height: "130px",
    width: "130px",
    marginRight: "3vw"
  };
  const styleList = {
    borderRadius: "10px",
    padding: "20px",
    margin: "3vh 5vw",
    height: "27vh",
    textAlign: "center",
    listStyle: "none",
    color: "#50AF6F",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "column",
    textTransform: "uppercase"
  };

  return (
    <div
      style={{
        backgroundColor: "#28292B",
        width: "100vw",
        margin: "auto",
        height: "100vh"
      }}
    >
      {/* <p
        style={{
          color: "#fff",
          textAlign: "center"
        }}
      >
        Skills/Tools
      </p> */}
      <NavBar />
      <div
        style={{
          display: "flex"
          // marginTop: "10vh"
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            textAlign: "center",
            margin: "5vh 15vw"
          }}
        >
          <p
            style={{
              color: "#EFB21E",
              fontWeight: "bold",
              fontFamily: "Open Sans Condensed",
              fontSize: "1.2rem"
            }}
          >
            FRONT-END SKILLS
          </p>
          <p
            style={{
              color: "grey",
              textAlign: "left",
              marginTop: "2vh"
            }}
          >
            Strong Javascript foundation with experience in hand-coding HTML
            using semantic markup, and CSS layout and positioning. Including but
            not limited to modern tools like <span style={style}> GRID</span>,
            <span style={style}> FLEXBOX</span>,{" "}
            <span style={style}> React Context</span>, and
            <span style={style}> ES6 </span>syntax.
          </p>
          <ul style={styleList}>
            <li>Javascript/ES6 </li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Styled Components</li>
          </ul>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            textAlign: "center",
            margin: "5vh 15vw"
          }}
        >
          <p
            style={{
              color: "#EFB21E",
              fontWeight: "bold",
              fontFamily: "Open Sans Condensed",
              fontSize: "1.2rem"
            }}
          >
            BACK-END SKILLS
          </p>
          <p
            style={{
              color: "grey",
              textAlign: "left",
              marginTop: "2vh"
            }}
          >
            Experience building <span style={style}>NoSQL</span> Database-driven
            <span style={style}> SPA</span> web applications with scalable{" "}
            <span style={style}>RESTful APIs</span> providing User
            Authentication via <span style={style}>JSON Web Tokens</span>.
          </p>
          <ul style={styleList}>
            <li>Node </li>
            <li>Express </li>
            <li>MongoDb</li>
            <li>Mongoose</li>
            <li>Version Control(Git)</li>
            <li>REST APIs</li>
            <li>Authentication(JWT)</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          margin: "4vh 3vw",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <img style={styleLogo} src={jsLogo} alt="javscript" />
        <img style={styleLogo} src={reactLogo} alt="javscript" />
        <img style={styleLogo} src={nodeLogo} alt="javscript" />
        <img style={styleLogo} src={htmlLogo} alt="javscript" />
        <img style={styleLogo} src={cssLogo} alt="javscript" />
        <img style={styleLogo} src={mongoLogo} alt="javscript" />
        <img style={styleLogo} src={gitLogo} alt="javscript" />
        <img style={styleLogo} src={jwtLogo} alt="javscript" />
      </div>
      {/* <p style={style}>
        footnote: i really enjoy learning how Javascript works internally in
        order to better understand the why behind the limitless
        features,options, and syntatical sugar that we enjoy as javascript
        developers.
      </p> */}
    </div>
  );
};

export default Skills;
