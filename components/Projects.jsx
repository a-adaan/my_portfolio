import projects from "@/public/assets/data";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="h-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ backgroundColor: project.bgcolor }}
          className="h-screen sticky top-0 lg:pt-[5vh] flex justify-center items-center"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
