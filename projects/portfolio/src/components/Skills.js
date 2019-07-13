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
  return (
    <div className="skills-container">
      <NavBar />
      <div className="col-2">
        <div className="list">
          <p className="list-header">FRONT-END SKILLS</p>
          <p className="list-desc">
            Strong Javascript foundation with experience in hand-coding HTML
            using semantic markup and CSS layout and positioning. Including but
            not limited to modern tools like <span> GRID</span>,
            <span> FLEXBOX</span>, <span> React Context</span>, and
            <span> ES6 </span>syntax.
          </p>
          <ul>
            <li>Javascript/ES6 </li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Styled Components</li>
          </ul>
        </div>
        <div className="list">
          <p className="list-header">BACK-END SKILLS</p>
          <p className="list-desc">
            Experience building <span>NoSQL</span> Database-driven
            <span> SPA</span> web applications with scalable{" "}
            <span>RESTful APIs</span> providing User Authentication via{" "}
            <span>JSON Web Tokens</span>.
          </p>
          <ul>
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
      <div className="logos">
        <img src={jsLogo} alt="javscript" />
        <img src={reactLogo} alt="javscript" />
        <img src={nodeLogo} alt="javscript" />
        <img src={htmlLogo} alt="javscript" />
        <img src={cssLogo} alt="javscript" />
        <img src={mongoLogo} alt="javscript" />
        <img src={gitLogo} alt="javscript" />
        <img src={jwtLogo} alt="javscript" />
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
