import { useState, useEffect } from "react";
import { titleChange } from "../utils/titleChanger";
import Button from "../components/Button";
import CardExperience from "../fragments/CardExperience";

interface Experiences {
  id: number;
  orgPic: string;
  position: string;
  orgComp: string;
  location: string;
  duration: string;
  description: string[];
}
interface ExperiencesProps {
  title?: string;
  description?: string;
}

const Experiences = ({ title, description }: ExperiencesProps) => {
  titleChange("ryanmoehs - experiences");
  const [experiences, setExperiences] = useState<Experiences[]>([])
  useEffect(() => {
      fetch("/ryan_experiences.json")
        .then((res) => res.json())
        .then((data) => setExperiences(data.data))
    }, [])
  return (
    <>
      {title && (
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-2 text-center px-4">{title}</h1>
      )}
      {description && (
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300 px-4 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 justify-center px-4">
        <Button color="bg-amber-400 dark:bg-cyan-600">Professional</Button>
        <Button color="bg-amber-400 dark:bg-cyan-600">Organizational</Button>
      </div>
      <div className="flex flex-col gap-y-4 w-full p-4 sm:p-8 lg:p-16">
        {experiences.map((exp)=>(
          <CardExperience>
            <CardExperience.OrgPic orgPic={exp.orgPic}/>
            <CardExperience.Heading 
              position={exp.position}
              orgComp={exp.orgComp}
              location={exp.location}
              duration={exp.duration}
            />

            {exp.description.map((desc, idx)=>(
              <CardExperience.Description key={idx} description={desc} />
            ))}
          </CardExperience>
        ))}
        
      </div>
    </>
  );
};

export default Experiences;
