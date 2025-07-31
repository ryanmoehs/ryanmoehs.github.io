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
    <div className="flex flex-col justify-center gap-4 p-8">
      {title && (
        <h1 className="text-3xl font-bold mt-8 mb-2 text-center">{title}</h1>
      )}
      {description && (
        <p className="text-lg mb-6 text-center text-gray-700 dark:text-gray-300">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 p-8">
        {projects.map((project) => (
          <div key={project.id} onClick={() => handleCardClick(project)} className="cursor-pointer">
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