import "../Projects.css";

import monitor from "../assets/monitor.svg";
import jobi from "../assets/jobi.png";
import moviebase from "../assets/moviebase.png";

const Projects = () => {
  const projects = [
    {
      title: "Jobi",
      image: jobi,
      alt: "A condensed image of the jobi home page",
      description:
        "Jobi is a job search platform that allows signed-in users to browse and save job listings. The project was initially developed as a client/developer exercise and included the creation of a polished and fully responsive home page, jobs list page, individual job page, and 404 error page within ten days. The client requested the use of firebase for storing job listings, dynamic pages through react-router-dom, and a login modal. The design was replicated as requested, and additional dynamic functionality such as accordions and filters were added later.",
      github: "https://www.github.com/rodgersajb/jobi",
      live: "https://jobi.alexrodgers.io",
    },
    {
      title: "Moviebase",
      image: moviebase,
      alt: "A condensed version of the moviebase homepage",
      description:
        "Moviebase is a movie search app that allows users to search for movies based on their preferred genre and timeframe. The search parameters are passed to the movieDB API, which returns twenty relevant movies. Users can browse through the     results and add their favorite movies to dynamically created lists, which are stored in firebase. The app provides more information about each movie through a pop-up modal, including ratings, descriptions, and availability on major                     streaming platforms.",
      github: "https://www.github.com/rodgersajb/vite-js-movie-app",
      live: "https://moviebase.alexrodgers.io",
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <img src={monitor} alt="project image with a closing tag" />
        <h1>Projects</h1>
      </div>
      <div className="cards">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project">
              <div className="content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Live</a>
              </div>

              <img src={project.image} alt={project.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
