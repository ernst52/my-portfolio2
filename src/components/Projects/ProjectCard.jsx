import './Projects.css';

function ProjectCard({ title, description, image, technologies, link }) {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        {technologies && (
          <ul className="project-tech-list">
            {technologies.map((tech, index) => (
              <li key={index} className="project-tech">
                {tech}
              </li>
            ))}
          </ul>
        )}

        {link && (
          <a
            href={link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;