import React from "react";
import NavBar from "./NavBar";
import Project from "./Project";
import movieAppImg from "../resources/images/movie-app-thumb.PNG";
import musicAppImg from "../resources/images/music-app.PNG";
import taskrAppImg from "../resources/images/taskr-app-thub.PNG";
import lasoAppImg from "../resources/images/laso-app-thumb.PNG";
import cssZenImg from "../resources/images/csszen.JPG";
import nodeImg from "../resources/images/nodejs-app.png";

const Projects = () => {
  const porjectlist = [
    {
      imgURL: movieAppImg,
      git:
        "https://github.com/chenderson1/assigments/tree/master/projects/the-movies-1",
      link: "http://corys-movie-app.surge.sh",
      title: "Movie-App",
      desc:
        "The Movie App is a Full-Stack movie catalog app that consumes the Themoviedb.org API. This is a work in progress and I intend to add user authentication and DB to allow users to save list of favorite movies by genre.",
      tools: ["JS", "HTML", "CSS", "React", "Styled Components"]
    },
    {
      imgURL: taskrAppImg,
      git: "https://github.com/chenderson1/taskr",
      link: "https://cory-taskr-app.herokuapp.com",
      title: "Taskr",
      desc:
        "Taskr is a Full-Stack To-do app at heart. It's aimed towards kids and parents for chore tracking. This was a group effort with 2 other developers to come up with an idea and build it out using version control via git and GitHub during a short sprint. ",
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
      git: "https://github.com/chenderson1/Laso",

      link: "https://lasoconcepts.com",
      title: "Laso",
      desc:
        "Laso is a client manamgement system aimed at supporting drug and alchohol rehabiliation and outpatient care. Laso was built to handle many layers of user access to facilitate outpatient handoff between different organizations. This was a group effort with 12 other developers to build MVP. ",
      tools: [
        "JS",
        "HTML",
        "CSS",
        "AngularJS",
        "NodeJs",
        "Express",
        "MongoDB",
        "MongoDB Driver"
      ]
    },
    {
      imgURL: nodeImg,
      git: "https://github.com/chenderson1/webScraper",

      link: "#",
      title: " Warrio/rs WebScraper",
      desc:
        "Node app that when run scrapes Reddit for the most popular Golden State Warrior articles posted within the past 24hrs and writes them into a JSON file.",
      tools: ["NodeJS", "Cherrio"]
    },
    {
      imgURL: cssZenImg,
      link: "http://corys-zen-garden.surge.sh",
      git:
        "https://github.com/chenderson1/assigments/tree/master/excercises/css-zen-garden",

      title: "Zen Garden",
      desc:
        "Zen garden is a FrontEnd Project where I tried to recreate the main version of http://www.csszengarden.com using only HTML and CSS",
      tools: ["HTML", "CSS"]
    },
    {
      imgURL: musicAppImg,
      git: " https://github.com/chenderson1/music-app",

      link: "https://corys-music-app.herokuapp.com",
      title: "Music-App",
      desc:
        "A Full-Stack music catalog that uses the Deezer music API. The purpose of Music App is to search for and save music to your profile. As of now only your favorite tracks and albums are saved. I intend to add the ability to  save custom playlist in order to organize your music. ",
      tools: ["JS", "HTML", "CSS", "React", "NodeJs", "Express", "MongoDB"]
    }
  ];

  const mappedProjects = porjectlist.map(project => {
    return <Project {...project} />;
  });

  return (
    <div className="projects">
      <NavBar />
      <div className="project-wrapper">{mappedProjects}</div>
    </div>
  );
};

export default Projects;
