import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects, onNavigate }) {
  const [filter, setFilter] = useState("All");

  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="projects-section" id="work">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">My Work</h2>
        <p className="section-sub">
          Engineering projects spanning structural analysis, computational
          mechanics, CAD design, and industrial applications.
        </p>
      </div>

      <div className="filter-bar">
        {allTags.slice(0, 8).map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${filter === tag ? "active" : ""}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}
