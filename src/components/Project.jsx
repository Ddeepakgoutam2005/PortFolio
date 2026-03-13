import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      image: "/assets/images/project-1.png",
      link: "https://rately-store-rating-system.vercel.app/",
      subtitle: "Rating, Community",
      title: "Rately - Store Rating System"
    },
    {
      id: 2,
      image: "/assets/images/project-2.png",
      link: "https://spotify-clone-eight-liart-82.vercel.app/",
      subtitle: "Music, Streaming",
      title: "Spotify Clone - Music Player"
    },
    {
      id: 3,
      image: "/assets/images/project-3.png",
      link: "https://politicalpromisetracker.vercel.app/",
      subtitle: "Politics, Data",
      title: "Political Promise Tracker"
    },
    {
      id: 4,
      image: "/assets/images/project-4.png",
      link: "https://scholara-a-student-final-project-su.vercel.app/",
      subtitle: "Education, AI",
      title: "Scholara - Student Project System"
    },
    {
      id: 5,
      image: "/assets/images/project-5.png",
      link: "https://ticket-support-system-main.vercel.app/",
      subtitle: "Support, Enterprise",
      title: "Ticket Support System"
    }
  ];

  return (
    <section className="section project" aria-label="my latest projects" id="project">
      <div className="slider-container">
        <ul className="slider-list has-scroll-animation">
          {[...projects, ...projects].map((project, index) => (
            <li className="slider-item" key={`${project.id}-${index}`}>
              <div className="project-card text-center">
                <div className="card-banner img-holder has-before" style={{ '--width': '1000', '--height': '763' }}>
                  <img src={project.image} width="1000" height="763" loading="lazy" alt={project.title} className="img-cover" />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn:hover">
                    <span className="span">Project Details</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
                <div className="card-content">
                  <p className="card-subtitle">{project.subtitle}</p>
                  <h3 className="title h3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-title">{project.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Project;
