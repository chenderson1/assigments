import React from "react";
import NavBar from "./NavBar";
import Project from "./Project";
import movieAppImg from "../resources/images/movie-app-thumb.PNG";
import musicAppImg from "../resources/images/music-app.PNG";
import taskrAppImg from "../resources/images/taskr-app-thub.PNG";
import lasoAppImg from "../resources/images/laso-app-thumb.PNG";
import cssZenImg from "../resources/images/csszen.JPG";

const Projects = () => {
  const porjectlist = [
    {
      imgURL: movieAppImg,
      link: "http://corys-movie-app.surge.sh",
      title: "Movie-App",
      desc:
        "I am a huge Movie person and I wanted a place to be able to look up movies and create playlist. The Movie App is a FullStack catalog app that comsumes the themoviedb.org API. This is a work in progress and I intend to add user authentiation and DB to allow users to save list of favorite movies by genre. ",
      tools: ["JS", "HTML", "CSS", "React", "Styled Components"]
    },
    {
      imgURL: taskrAppImg,
      link: "https://cory-taskr-app.herokuapp.com",
      title: "Taskr",
      desc:
        "Taskr is a FullStack To-do app at heart. It's aimed towards kids and parents for chore tracking. This was a group effert to come up with an idea and build it out using version control via git and github during a short sprint. ",
      tools: [
        "JS",
        "HTML",
        "CSS",
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Styled Components"
      ]
    },
    {
      imgURL: lasoAppImg,
      link: "https://lasoconcepts.com",
      title: "Laso",
      desc:
        "Laso is a client manamgement system aimed at supporting drug and alchohol rehab and outpatient care. Laso was built to handle many layers of user access to facilitate outpatient handoff between different organizations. Built on the MEAN stack with AngularJS, this was a group effort with 12 other developers. ",
      tools: ["JS", "HTML", "CSS", "AngularJS", "NodeJs", "Express", "MongoDB"]
    },
    {
      imgURL: cssZenImg,
      link: "http://corys-zen-garden.surge.sh",
      title: "Zen Garden",
      desc:
        "Zen garden is a FrontEnd Project where I tried to recreate the main version of http://www.csszengarden.com using only HTML and CSS",
      tools: ["HTML", "CSS"]
    },
    {
      imgURL: musicAppImg,
      link: "https://corys-music-app.herokuapp.com",
      title: "Music-App",
      desc:
        "FullStack music catalog that uses the Deezer music API. The purpose of Music App is to search for and save music to your profile. As of now only your favorite tracks and albums are saved. I intend to add the ability to  save custom playlist in order to organize your music. ",
      tools: ["JS", "HTML", "CSS", "React", "NodeJs", "Express", "MongoDB"]
    }
  ];

  const mappedProjects = porjectlist.map(project => {
    return <Project {...project} />;
  });

  return (
    <div className="projects">
      <NavBar />
      <div style={{}} className="project-wrapper">
        {mappedProjects}
      </div>
    </div>
  );
};

export default Projects;
