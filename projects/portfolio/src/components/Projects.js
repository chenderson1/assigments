import React from "react";
import NavBar from "./NavBar";
import Project from "./Project";
import movieAppImg from "../resources/images/movie-app-thumb.PNG";
import musicAppImg from "../resources/images/music-app.PNG";
import taskrAppImg from "../resources/images/taskr-app-thub.PNG";
import lasoAppImg from "../resources/images/laso-app-thumb.PNG";

const Projects = () => {
  const porjectlist = [
    {
      imgURL: movieAppImg,
      link: "http://corys-movie-app.surge.sh/",
      title: "Movie-App",
      desc:
        "I am a huge Movie person and I wanted a place to be able to look up movies and box office info. The Movie App is a film catalog app that uses the themoviedb.org API to provide data. This is a work in progress and I intend to add user authentiation and DB to allow users to save list of fav movies. ",
      tools: ["JS", "HTML", "CSS", "React"]
    },
    {
      imgURL: taskrAppImg,
      link: "https://cory-taskr-app.herokuapp.com/",
      title: "Taskr",
      desc:
        "Taskr is a To-do list at heart. Its is a app aimed towards kids/parents for chore tracking. This was a group effert to come up with an idea and build it out using version control via git and github. ",
      tools: ["JS", "HTML", "CSS", "React", "NodeJs", "Express", "MongoDB"]
    },
    {
      imgURL: lasoAppImg,
      link: "https://lasoconcepts.com/",
      title: "Laso",
      desc:
        "Laso is a client manamgement system aimed at supporting drug and alchohol rehab and outpatient care. Laso was built to handle many layers of user access to facilitate outpatient handoff between different organizations. Built on the MEAN stack with AngularJS, this was a group effort with 12 other developers. ",
      tools: ["JS", "HTML", "CSS", "AngularJS", "NodeJs", "Express", "MongoDB"]
    },
    {
      imgURL: musicAppImg,
      link: "https://corys-music-app.herokuapp.com/",
      title: "Music-App",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat rerum ab quam esse, sapiente beatae nam nemo possimus a.",
      tools: ["JS", "HTML", "CSS", "React", "NodeJs", "Express", "MongoDB"]
    }
  ];

  const mappedProjects = porjectlist.map(project => {
    return <Project {...project} />;
  });

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        {mappedProjects}
      </div>
    </div>
  );
};

export default Projects;
