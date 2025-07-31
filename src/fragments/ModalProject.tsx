import Modal from "../components/Modal";
import { Link } from "react-router";
import { IoMdCode } from "react-icons/io";
import { RiEyeLine } from "react-icons/ri";

interface Project {
  id: number;
  link?: string;
  demo?: string;
  url_image: string;
  title: string;
  category: string;
  description: string;
  tech_stack: string[];
}

interface ModalProjectProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const ModalProject = ({ open, onClose, project }: ModalProjectProps) => {
  if (!project) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
        <p className='dark:bg-cyan-300/10 border dark:border-cyan-300 dark:text-cyan-300 mt-2 rounded-lg px-4 py-2 w-fit flex gap-x-2 align-middle items-center mb-4'>{project.category}</p>
      </div>
      <img src={project.url_image} alt={project.title} className='w-full h-48 object-cover rounded mb-4' />

      <div className='flex flex-col gap-y-2'>
        <span className='font-semibold'>Description:</span>
        <p className='mb-2'>{project.description}</p>
        <span className='font-semibold'>Tech Stack:</span>
        <div className='flex flex-wrap gap-2'>
          {project.tech_stack.map((tech, idx) => (
            <div key={idx} className='flex p-2 w-fit text-center rounded-lg border border-black bg-amber-950 dark:bg-slate-700 text-white dark:border-white'>
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-x-4">
        {project.link ? project.link && (
          <Link to={project.link} target='_blank' rel='noopener noreferrer' className='dark:bg-cyan-300/10 dark:hover:bg-cyan-600 dark:hover:text-white border dark:border-cyan-300 dark:text-cyan-300 mt-2 rounded-lg px-4 py-2 w-fit flex gap-x-2 align-middle items-center'>
            <IoMdCode /> See Code
          </Link>
        ) : ""}
        {project.demo ? project.demo && (
          <Link to={project.demo} target='_blank' rel='noopener noreferrer' className='dark:bg-cyan-300/10 dark:hover:bg-cyan-600 dark:hover:text-white border dark:border-cyan-300 dark:text-cyan-300 mt-2 rounded-lg px-4 py-2 w-fit flex gap-x-2 align-middle items-center'>
            <RiEyeLine /> Live Demo
          </Link>
        ) : ""}

        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
