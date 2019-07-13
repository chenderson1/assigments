import React from "react";
import NavBar from "./NavBar";
import linkedinLogo from "../resources/skill_icons/iconfinder_linkedin_313117.svg";
import gmailLogo from "../resources/skill_icons/iconfinder_gmail_1220367.svg";
import twitterLogo from "../resources/skill_icons/iconfinder_twitter_313075.svg";
import phoneLogo from "../resources/skill_icons/iconfinder_mobile_1287520.svg";
import githubLogo from "../resources/skill_icons/iconfinder_github_2308116.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <NavBar />
      <div className="col-2">
        <div className="item1">
          <img
            src={require("../resources/images/hU1KxUVY_400x400.png")}
            alt="avatar"
          />
          <p>
            PLEASE DOWNLOAD MY
            <a href="https://www.dropbox.com/s/kc33mdoghxy6kb7/Henderson_Cory_Res_2019%28Jul%29.docx?dl=1">
              RESUME
            </a>
          </p>
        </div>
        <div className="item2">
          <ul>
            <a
              href=" https://www.linkedin.com/in/cory-henderson-04/"
              target="_blank"
            >
              <li>
                <img src={linkedinLogo} alt="linkedin" />
                https://www.linkedin.com/in/cory-henderson-04/
              </li>
            </a>
            <li>
              <img src={gmailLogo} alt="linkedin" />
              CORY.HENDERSON07@GMAIL.COM
            </li>
            <a href="https://twitter.com/coryhenderson04" target="_blank">
              <li>
                <img src={twitterLogo} alt="linkedin" />
                @coryhenderson04
              </li>
            </a>
            <a href="https://github.com/chenderson1" target="_blank">
              <li>
                <img src={githubLogo} alt="github" />
                chenderson1
              </li>
            </a>
            <li>
              <img src={phoneLogo} alt="linkedin" />
              (510) 394-4510
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
