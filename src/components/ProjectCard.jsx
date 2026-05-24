import { useState } from "react";

export default function ProjectCard({ project, index, onNavigate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`project-card ${hovered ? "hovered" : ""}`}
      style={{ "--card-color": project.coverColor, "--delay": `${index * 0.05}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onNavigate("project", project)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onNavigate("project", project)}
      role="button"
      aria-label={`View ${project.title}`}
    >
      <div className="card-image-wrap">
        {project.image ? (
          <img src={project.image} alt={project.title} className="card-img" />
        ) : (
          <div className="card-img-placeholder">
            <div className="placeholder-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21,15 16,10 5,21" />
              </svg>
            </div>
            <span className="placeholder-text">Project Image</span>
          </div>
        )}
        <div className="card-overlay">
          <div className="overlay-content">
            <h3 className="overlay-title">{project.title}</h3>
            <p className="overlay-desc">{project.shortDesc}</p>
            <div className="overlay-tags">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="overlay-cta">
              View Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="card-year">{project.year}</div>
        <h3 className="card-title">{project.title}</h3>
        <div className="card-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-small">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
