import Card from "../components/Card";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router";

interface CardProjectProps {
  image?: string;
  children: React.ReactNode;
  className?: string;
}

const CardProject = ({ image, children, className = "" }: CardProjectProps) => {
  // Pisahkan children menjadi konten utama dan footer
  const childrenArray = Array.isArray(children) ? children : [children];
  const mainContent = childrenArray.filter((child: any) => child?.type?.displayName !== "Footer");
  const footer = childrenArray.find((child: any) => child?.type?.displayName === "Footer");

  return (
    <Card className={`h-96 flex flex-col overflow-hidden rounded-2xl p-0 ${className}`}>
      {image && (
        <img
          src={image}
          alt="Product image"
          className="w-full h-40 object-cover rounded-t-2xl"
        />
      )}
      <div className="flex flex-col flex-1 gap-y-2 p-4">
        {mainContent}
        <div className="mt-auto">{footer}</div>
      </div>
    </Card>
  );
};

const Heading = (props: any) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex justify-between align-middle items-center'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <Link to={props.link} target="_blank" className="text-lg">
          <MdOpenInNew />
        </Link>
      </div>
    </div>
  );
};

const Description = (props: any) => {
  return (
    <div className="text-base max-h-16 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
      {props.children}
    </div>
  );
};

const Footer = (props: any) => {
  const techElements = Array.isArray(props.children) ? props.children : [props.children];
  const visibleTechs = techElements.slice(0, 3);
  const moreCount = techElements.length - 3;
  return (
    <div className='flex gap-x-2'>
      {visibleTechs}
      {moreCount > 0 && (
        <div className='flex p-2 w-fit text-center rounded-lg border border-dashed border-black bg-transparent dark:border-white text-black dark:text-white'>
          +{moreCount} more
        </div>
      )}
    </div>
  );
};
Footer.displayName = "Footer";

const Category = (props: any) => {
  return (
    <div className='flex'>
      <h1 className=' dark:text-cyan-300'>{props.children}</h1>
    </div>
  );
};

const TechStack = (props: any) => {
  const techs = Array.isArray(props.children) ? props.children : [props.children];
  const visibleTechs = techs.slice(0, 3);
  const moreCount = techs.length - 3;
  return (
    <div className='flex gap-x-2'>
      {visibleTechs.map((tech, idx) => (
        <div key={idx} className='flex p-2 w-fit text-center rounded-lg border border-black bg-amber-950 dark:bg-slate-700 text-white dark:border-white'>
          {tech}
        </div>
      ))}
      {moreCount > 0 && (
        <div className='flex p-2 w-fit text-center rounded-lg border border-dashed border-black bg-transparent dark:border-white text-black dark:text-white'>
          +{moreCount} more
        </div>
      )}
    </div>
  );
};

CardProject.Heading = Heading;
CardProject.Description = Description;
CardProject.Category = Category;
CardProject.TechStack = TechStack;
CardProject.Footer = Footer;

export default CardProject;
