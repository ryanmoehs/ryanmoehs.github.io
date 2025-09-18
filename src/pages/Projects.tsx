import { useEffect, useState } from "react"
import { titleChange } from "../utils/titleChanger"
import CardProject from "../fragments/CardProject"
import ProjectDescription from "../components/ProjectDescription"
import ModalProject from "../fragments/ModalProject"

interface Project {
  id: number;
  link: string;
  url_image: string;
  title: string;
  category: string;
  description: string;
  tech_stack: string[];
}

interface ProjectProps {
  title: string,
  description: string
}

const Projects = ({title, description}: ProjectProps) => {
  titleChange("ryanmoehs - projects")
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    fetch("/ryan_projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.data))
  }, [])

  const handleCardClick = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col justify-center gap-4 p-4 sm:p-6 md:p-8">
      {title && (
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-2 text-center">{title}</h1>
      )}
      {description && (
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
        {projects.map((project) => (
          <div key={project.id} onClick={() => handleCardClick(project)} className="cursor-pointer transform transition-transform hover:scale-105">
            <CardProject image={project.url_image}>
              <CardProject.Heading
                title={project.title}
                link={project.link}
              />
              <CardProject.Category>{project.category}</CardProject.Category>
              <CardProject.Description>
                <ProjectDescription description={project.description} project={project} />
              </CardProject.Description>
              <CardProject.Footer>
                {project.tech_stack.map((tech) => (
                  <CardProject.TechStack key={tech}>{tech}</CardProject.TechStack>
                ))}
              </CardProject.Footer>
            </CardProject>
          </div>
        ))}
      </div>
      <ModalProject open={modalOpen} onClose={() => setModalOpen(false)} project={selectedProject} />
    </div>
  )
}

export default Projects