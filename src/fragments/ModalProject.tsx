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
      <div className='flex flex-col gap-y-3'>
        <h2 className='text-lg sm:text-xl font-bold mb-2 pr-8'>{project.title}</h2>
        <p className='dark:bg-cyan-300/10 border dark:border-cyan-300 dark:text-cyan-300 bg-amber-200 border-amber-600 text-amber-800 rounded-lg px-3 py-1 w-fit flex gap-x-2 align-middle items-center text-sm'>
          {project.category}
        </p>
      </div>
      <img src={project.url_image} alt={project.title} className='w-full h-32 sm:h-48 object-cover rounded mb-4' />

      <div className='flex flex-col gap-y-3'>
        <div>
          <span className='font-semibold text-sm sm:text-base'>Description:</span>
          <p className='mb-2 text-sm sm:text-base leading-relaxed'>{project.description}</p>
        </div>
        
        <div>
          <span className='font-semibold text-sm sm:text-base'>Tech Stack:</span>
          <div className='flex flex-wrap gap-2 mt-2'>
            {project.tech_stack.map((tech, idx) => (
              <div key={idx} className='flex p-1 sm:p-2 w-fit text-center rounded-lg border border-black bg-amber-950 dark:bg-slate-700 text-white dark:border-white text-xs sm:text-sm'>
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
          {project.link && (
            <Link to={project.link} target='_blank' rel='noopener noreferrer' className='dark:bg-cyan-300/10 dark:hover:bg-cyan-600 dark:hover:text-white border dark:border-cyan-300 dark:text-cyan-300 bg-amber-200 hover:bg-amber-300 border-amber-600 text-amber-800 rounded-lg px-3 py-2 w-fit flex gap-x-2 align-middle items-center text-sm'>
              <IoMdCode /> See Code
            </Link>
          )}
          {project.demo && (
            <Link to={project.demo} target='_blank' rel='noopener noreferrer' className='dark:bg-cyan-300/10 dark:hover:bg-cyan-600 dark:hover:text-white border dark:border-cyan-300 dark:text-cyan-300 bg-amber-200 hover:bg-amber-300 border-amber-600 text-amber-800 rounded-lg px-3 py-2 w-fit flex gap-x-2 align-middle items-center text-sm'>
              <RiEyeLine /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
