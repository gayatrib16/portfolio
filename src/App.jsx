import { useState, useEffect } from "react";
import { projects } from "./data/projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProject, setCurrentProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page, project = null) => {
    setCurrentPage(page);
    setCurrentProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "project" && currentProject) {
    return (
      <ProjectDetail
        project={currentProject}
        onBack={() => navigateTo("home")}
        onNavigate={navigateTo}
        projects={projects}
      />
    );
  }

  return (
    <div className="portfolio-root">
      <Navbar scrollY={scrollY} onNavigate={navigateTo} />
      <main>
        <Hero />
        <ProjectsGrid projects={projects} onNavigate={navigateTo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
