import React from "react";
import NavBar from "./NavBar";
import linkedinLogo from "../resources/skill_icons/iconfinder_linkedin_313117.svg";
import gmailLogo from "../resources/skill_icons/iconfinder_gmail_1220367.svg";
import twitterLogo from "../resources/skill_icons/iconfinder_twitter_313075.svg";
import phoneLogo from "../resources/skill_icons/iconfinder_mobile_1287520.svg";
import githubLogo from "../resources/skill_icons/iconfinder_github_2308116.svg";

const Contact = () => {
  const styleImg = {
    height: "100px",
    width: "100px",
    marginRight: "2vw"
  };
  const styleContainer = {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center"
  };
  const styleConItem1 = {
    height: "65%",
    width: "50vw",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  };
  const styleConItem2 = {
    height: "65%",
    width: "50vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  };
  const styleList = {
    marginLeft: "1vw",
    listStyle: "none",
    color: "white"
  };
  const styleListItem = {
    display: "flex",
    alignItems: "center",
    marginBottom: "3vh",
    color: "#50AF6F"
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
      <NavBar />
      <div style={styleContainer}>
        <div style={styleConItem1}>
          <img
            src={require("../resources/images/hU1KxUVY_400x400.png")}
            alt="avatar"
            style={{
              marginRight: "3vw",
              height: "450px",
              width: "450px",
              marginBottom: "3vh",
              borderRadius: "9px",
              boxShadow: "1px 1px 25px #1d1d1f"
            }}
          />
          <p style={{ color: "grey" }}>
            PLEASE DOWNLOAD MY
            <a
              style={{
                marginRight: "3vw",
                marginTop: "1vh",
                marginLeft: ".25vw",
                textDecoration: "none",
                color: "#EFB21E"
              }}
              href="https://www.dropbox.com/s/491ztn3smgec3gb/securityPlusFinalExamResults.pdf?dl=1"
            >
              RESUME
            </a>
          </p>
        </div>
        <div style={styleConItem2}>
          <ul style={styleList}>
            <a
              href=" https://www.linkedin.com/in/cory-henderson-04/"
              target="_blank"
              style={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <li style={styleListItem}>
                <img style={styleImg} src={linkedinLogo} alt="linkedin" />
                https://www.linkedin.com/in/cory-henderson-04/
              </li>
            </a>
            <li style={styleListItem}>
              <img style={styleImg} src={gmailLogo} alt="linkedin" />
              CORY.HENDERSON07@GMAIL.COM
            </li>
            <a
              href="https://twitter.com/coryhenderson04"
              target="_blank"
              style={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <li style={styleListItem}>
                <img style={styleImg} src={twitterLogo} alt="linkedin" />
                @coryhenderson04
              </li>
            </a>
            <a
              href="https://github.com/chenderson1"
              target="_blank"
              style={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <li style={styleListItem}>
                <img style={styleImg} src={githubLogo} alt="github" />
                chenderson1
              </li>
            </a>
            <li style={styleListItem}>
              <img style={styleImg} src={phoneLogo} alt="linkedin" />
              (254)-423-7019
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
