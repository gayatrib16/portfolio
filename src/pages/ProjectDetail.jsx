// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function ProjectDetail({ project, onBack, onNavigate, projects }) {
//   const [lightbox, setLightbox] = useState(null);
//   const currentIndex = projects.findIndex((p) => p.id === project.id);
//   const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
//   const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

//   return (
//     <div className="portfolio-root">
//       <Navbar scrollY={100} onNavigate={onNavigate} />

//       <div className="detail-hero" style={{ "--cover": project.coverColor }}>
//         <div className="detail-hero-bg"></div>
//         <div className="detail-hero-content">
//           <button className="back-btn" onClick={onBack}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <path d="M19 12H5M12 19l-7-7 7-7" />
//             </svg>
//             Back to Portfolio
//           </button>
//           <div className="detail-meta">
//             <span className="detail-year">{project.year}</span>
//             {project.tags.map((tag) => (
//               <span key={tag} className="detail-tag">{tag}</span>
//             ))}
//           </div>
//           <h1 className="detail-title">{project.title}</h1>
//           <p className="detail-subtitle">{project.shortDesc}</p>
//         </div>
//       </div>

//       <div className="detail-body">
//         <div className="detail-container">
// <div className="detail-main">
//   <section className="detail-section">
//     <h2 className="detail-section-title">Project Overview</h2>
//     {project.description.split("\n\n").map((para, i) => (
//       <p key={i} className="detail-para">{para}</p>
//     ))}
//   </section>

//   {[
//     { key: "objective",  label: "Objective" },
//     { key: "specs",  label: "System Specifications & Layout" },
//     { key: "design",  label: "Design Process" },
//     { key: "finalspec",  label: "Final Design Specifications" },
//     { key: "challenge",   label: "The Challenge" },
//     { key: "approach",    label: "The Approach" },
//     { key: "methodology", label: "Methodology" },
//     { key: "material", label: "Material Selection" },
//     { key: "calc", label: "Design Calculations and Modeling" },
//     { key: "validation",  label: "Validation and Results" },
//     { key: "conclusion",  label: "Conclusion" },
    
//   ].map(({ key, label }) =>
//     project[key] ? (
//       <section className="detail-section" key={key}>
//         <h2 className="detail-section-title">{label}</h2>
//         {project[key].split("\n\n").map((para, i) => (
//           <p key={i} className="detail-para">{para}</p>
//         ))}
//       </section>
//     ) : null
//   )}

//   <section className="detail-section">
//     <h2 className="detail-section-title">Project Images</h2>
//     <div className="detail-gallery">
//       {project.images && project.images.length > 0 ? (
//         project.images.map((img, i) => (
//           <div key={i} className="gallery-item" onClick={() => setLightbox(img)}>
//             <img src={img} alt={`${project.title} - ${i + 1}`} />
//             <div className="gallery-zoom">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
//               </svg>
//             </div>
//           </div>
//         ))
//       ) : (
//         [1, 2, 3, 4].map((n) => (
//           <div key={n} className="gallery-item gallery-placeholder">
//             <div className="gallery-ph-inner">
//               <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
//                 <rect x="3" y="3" width="18" height="18" rx="2" />
//                 <circle cx="8.5" cy="8.5" r="1.5" />
//                 <polyline points="21,15 16,10 5,21" />
//               </svg>
//               <span>Image {n}</span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   </section>
// </div>

//           <aside className="detail-sidebar">
//             <div className="sidebar-card">
//               <h3 className="sidebar-title">Skills &amp; Tools</h3>
//               <div className="skill-list">
//                 {project.skills.map((skill) => (
//                   <div key={skill} className="skill-item">
//                     <div className="skill-dot"></div>
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="sidebar-card">
//               <h3 className="sidebar-title">Project Info</h3>
//               <div className="info-row">
//                 <span className="info-label">Year</span>
//                 <span className="info-val">{project.year}</span>
//               </div>
//               <div className="info-row">
//                 <span className="info-label">Category</span>
//                 <span className="info-val">{project.tags[0]}</span>
//               </div>
//             </div>
//           </aside>
//         </div>

//         <div className="detail-nav">
//           {prevProject && (
//             <button className="proj-nav-btn prev" onClick={() => onNavigate("project", prevProject)}>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <path d="M19 12H5M12 19l-7-7 7-7" />
//               </svg>
//               <div>
//                 <span className="nav-label">Previous</span>
//                 <span className="nav-proj-title">{prevProject.title}</span>
//               </div>
//             </button>
//           )}
//           <button className="proj-nav-home" onClick={onBack}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//               <polyline points="9,22 9,12 15,12 15,22" />
//             </svg>
//             All Projects
//           </button>
//           {nextProject && (
//             <button className="proj-nav-btn next" onClick={() => onNavigate("project", nextProject)}>
//               <div>
//                 <span className="nav-label">Next</span>
//                 <span className="nav-proj-title">{nextProject.title}</span>
//               </div>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </button>
//           )}
//         </div>
//       </div>

//       {lightbox && (
//         <div className="lightbox" onClick={() => setLightbox(null)}>
//           <button className="lightbox-close">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 6 6 18M6 6l12 12" />
//             </svg>
//           </button>
//           <img src={lightbox} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Reusable image gallery renderer ──────────────────────────────────────────
function ImageGallery({ images, title, onLightbox }) {
  if (!images || images.length === 0) return null;

  const getGridClass = (count) => {
    if (count === 1) return "gallery-grid-1";
    if (count === 2) return "gallery-grid-2";
    return "gallery-grid-multi";
  };

  return (
    <div className={`section-gallery ${getGridClass(images.length)}`}>
      {images.map((img, i) => (
        <div key={i} className="gallery-item section-gallery-item" onClick={() => onLightbox(img)}>
          <img src={img} alt={`${title} - image ${i + 1}`} />
          <div className="gallery-zoom">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main project images gallery ───────────────────────────────────────────────
function MainGallery({ images, title, onLightbox }) {
  const hasImages = images && images.length > 0;

  if (!hasImages) {
    return (
      <div className="detail-gallery detail-gallery-placeholder-grid">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="gallery-item gallery-placeholder">
            <div className="gallery-ph-inner">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21,15 16,10 5,21" />
              </svg>
              <span>Image {n}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="detail-gallery detail-gallery-single">
        <div className="gallery-item gallery-item-natural" onClick={() => onLightbox(images[0])}>
          <img src={images[0]} alt={`${title} - 1`} />
          <div className="gallery-zoom">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="detail-gallery detail-gallery-2">
        {images.map((img, i) => (
          <div key={i} className="gallery-item" onClick={() => onLightbox(img)}>
            <img src={img} alt={`${title} - ${i + 1}`} />
            <div className="gallery-zoom">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="detail-gallery detail-gallery-multi">
      {images.map((img, i) => (
        <div key={i} className="gallery-item" onClick={() => onLightbox(img)}>
          <img src={img} alt={`${title} - ${i + 1}`} />
          <div className="gallery-zoom">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Document buttons ──────────────────────────────────────────────────────────
function DocumentButtons({ reportUrl, paperUrl }) {
  if (!reportUrl && !paperUrl) return null;
  return (
    <div className="doc-buttons">
      {reportUrl && (
        <a href={reportUrl} target="_blank" rel="noopener noreferrer" className="doc-btn doc-btn-report">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          View Full Report
        </a>
      )}
      {paperUrl && (
        <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="doc-btn doc-btn-paper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="6" x2="16" y2="6" />
            <line x1="12" y1="10" x2="16" y2="10" />
          </svg>
          Research Paper
        </a>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetail({ project, onBack, onNavigate, projects }) {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxList, setLightboxList] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const openLightbox = (img, list = [img]) => {
    const idx = list.indexOf(img);
    setLightboxList(list);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightbox(img);
  };

  const lightboxPrev = (e) => {
    e.stopPropagation();
    const newIdx = (lightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    setLightboxIndex(newIdx);
    setLightbox(lightboxList[newIdx]);
  };

  const lightboxNext = (e) => {
    e.stopPropagation();
    const newIdx = (lightboxIndex + 1) % lightboxList.length;
    setLightboxIndex(newIdx);
    setLightbox(lightboxList[newIdx]);
  };

  const sections = [
    { key: "objective",   label: "Objective" },
    { key: "specs",       label: "System Specifications & Layout" },
    { key: "design",      label: "Design Process" },
    { key: "finalspec",   label: "Final Design Specifications" },
    { key: "challenge",   label: "The Challenge" },
    { key: "approach",    label: "The Approach" },
    { key: "methodology", label: "Methodology" },
    { key: "material",    label: "Material Selection" },
    { key: "calc",        label: "Design Calculations and Modeling" },
    { key: "validation",  label: "Validation and Results" },
    { key: "conclusion",  label: "Conclusion" },
  ];

  return (
    <div className="portfolio-root">
      <Navbar scrollY={100} onNavigate={onNavigate} />

      <div className="detail-hero" style={{ "--cover": project.coverColor }}>
        <div className="detail-hero-bg"></div>
        <div className="detail-hero-content">
          <button className="back-btn" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
          <div className="detail-meta">
            <span className="detail-year">{project.year}</span>
            {project.tags.map((tag) => (
              <span key={tag} className="detail-tag">{tag}</span>
            ))}
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.shortDesc}</p>
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-container">
          <div className="detail-main">

            <section className="detail-section">
              <h2 className="detail-section-title">Project Overview</h2>
              {project.description.split("\n\n").map((para, i) => (
                <p key={i} className="detail-para">{para}</p>
              ))}
            </section>

            {/* {sections.map(({ key, label }) => {
              const text = project[key];
              const sectionImages = project[`${key}Images`];
              const hasText = text && text.trim().length > 0;
              const hasImgs = sectionImages && sectionImages.length > 0;
              if (!hasText && !hasImgs) return null;
              return (
                <section className="detail-section" key={key}>
                  <h2 className="detail-section-title">{label}</h2>
                  {hasText && text.split("\n\n").map((para, i) => (
                    <p key={i} className="detail-para">{para}</p>
                  ))}
                  {hasImgs && (
                    <ImageGallery
                      images={sectionImages}
                      title={label}
                      onLightbox={(img) => openLightbox(img, sectionImages)}
                    />
                  )}
                </section>
              );
            })} */}
            {sections.map(({ key, label }) => {
  const content = project[key];
  const sectionImages = project[`${key}Images`];
  const hasContent = content && (typeof content === 'string' ? content.trim().length > 0 : content.length > 0);
  const hasImgs = sectionImages && sectionImages.length > 0;

  // Neither text nor images — skip
  if (!hasContent && !hasImgs) return null;

  // ARRAY format: [{text: "...", images: [img1]}, {text: "...", images: [img2]}]
  if (Array.isArray(content)) {
    return (
      <section className="detail-section" key={key}>
        <h2 className="detail-section-title">{label}</h2>
        {content.map((block, i) => (
          <div key={i} className="detail-block">
            {block.text && block.text.split("\n\n").map((para, j) => (
              <p key={j} className="detail-para">{para}</p>
            ))}
            {block.images && block.images.length > 0 && (
              <ImageGallery
                images={block.images}
                title={label}
                onLightbox={(img) => openLightbox(img, block.images)}
              />
            )}
          </div>
        ))}
      </section>
    );
  }

  // STRING format (existing behavior — unchanged)
  return (
    <section className="detail-section" key={key}>
      <h2 className="detail-section-title">{label}</h2>
      {content && content.split("\n\n").map((para, i) => (
        <p key={i} className="detail-para">{para}</p>
      ))}
      {hasImgs && (
        <ImageGallery
          images={sectionImages}
          title={label}
          onLightbox={(img) => openLightbox(img, sectionImages)}
        />
      )}
    </section>
  );
})}

            {project.images && project.images.length > 0 && (
              <section className="detail-section">
                <h2 className="detail-section-title">Project Images</h2>
                <MainGallery
                  images={project.images}
                  title={project.title}
                  onLightbox={(img) => openLightbox(img, project.images)}
                />
              </section>
            )}

            <DocumentButtons reportUrl={project.reportUrl} paperUrl={project.paperUrl} />

          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Skills &amp; Tools</h3>
              <div className="skill-list">
                {project.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-dot"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Project Info</h3>
              <div className="info-row">
                <span className="info-label">Year</span>
                <span className="info-val">{project.year}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Category</span>
                <span className="info-val">{project.tags[0]}</span>
              </div>
            </div>

            {(project.reportUrl || project.paperUrl) && (
              <div className="sidebar-card">
                <h3 className="sidebar-title">Documents</h3>
                {project.reportUrl && (
                  <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="sidebar-doc-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Full Report (PDF)
                  </a>
                )}
                {project.paperUrl && (
                  <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="sidebar-doc-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    Research Paper (PDF)
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>

        <div className="detail-nav">
          {prevProject ? (
            <button className="proj-nav-btn prev" onClick={() => onNavigate("project", prevProject)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <div>
                <span className="nav-label">Previous</span>
                <span className="nav-proj-title">{prevProject.title}</span>
              </div>
            </button>
          ) : <div />}

          <button className="proj-nav-home" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            All Projects
          </button>

          {nextProject ? (
            <button className="proj-nav-btn next" onClick={() => onNavigate("project", nextProject)}>
              <div>
                <span className="nav-label">Next</span>
                <span className="nav-proj-title">{nextProject.title}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : <div />}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {lightboxList.length > 1 && (
            <button className="lightbox-arrow lightbox-arrow-left" onClick={lightboxPrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <img src={lightbox} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
          {lightboxList.length > 1 && (
            <button className="lightbox-arrow lightbox-arrow-right" onClick={lightboxNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}
          {lightboxList.length > 1 && (
            <div className="lightbox-counter">{lightboxIndex + 1} / {lightboxList.length}</div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}