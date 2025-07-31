import { useRef, useState, useEffect } from "react";

import Modal from "../components/Modal";

interface Project {
  id: number;
  link: string;
  url_image: string;
  title: string;
  category: string;
  description: string;
  tech_stack: string[];
}

interface ProjectDescriptionProps {
  description: string;
  project: Project;
}

const ProjectDescription = ({ description, project }: ProjectDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      setShowReadMore(descRef.current.scrollHeight > descRef.current.clientHeight);
    }
  }, [description]);

  return (
    <>
      <div
        ref={descRef}
        className="overflow-hidden text-ellipsis"
        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', maxHeight: '3.2em' }}
      >
        {description}
      </div>
      {showReadMore && (
        <button
          className="text-cyan-500 hover:underline text-sm mt-1"
          onClick={() => setExpanded(true)}
        >
          Read More
        </button>
      )}
      <Modal open={expanded} onClose={() => setExpanded(false)}>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <img src={project.url_image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
        <p className="mb-2"><span className="font-semibold">Category:</span> {project.category}</p>
        <p className="mb-2"><span className="font-semibold">Description:</span> {project.description}</p>
        <p className="mb-2"><span className="font-semibold">Tech Stack:</span> {project.tech_stack.join(', ')}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">Visit Project</a>
      </Modal>
    </>
  );
};

export default ProjectDescription;
