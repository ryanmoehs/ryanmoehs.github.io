import { titleChange } from "../utils/titleChanger";
import Button from "../components/Button";
import CardExperience from "../fragments/CardExperience";
interface ExperiencesProps {
  title?: string;
  description?: string;
}

const Experiences = ({ title, description }: ExperiencesProps) => {
  titleChange("ryanmoehs - experiences");
  return (
    <>
      {title && (
        <h1 className="text-3xl font-bold mt-8 mb-2 text-center">{title}</h1>
      )}
      {description && (
        <p className="text-lg mb-6 text-center text-gray-700 dark:text-gray-300">
          {description}
        </p>
      )}
      <div className="flex gap-x-4 justify-center">
        <Button color="bg-amber-400 dark:bg-cyan-600">Professional</Button>
        <Button color="bg-amber-400 dark:bg-cyan-600">Organizational</Button>
      </div>
      <div className="flex flex-col gap-y-4 w-full p-16">
        <CardExperience></CardExperience>
        <CardExperience></CardExperience>
        <CardExperience></CardExperience>
      </div>
    </>
  );
};

export default Experiences;
