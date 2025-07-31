import { titleChange } from "../utils/titleChanger";

interface PlaygroundProps {
  title: string;
  description: string;
}
const Playground = ({ title, description }: PlaygroundProps) => {
  titleChange("ryanmoehs - playground");
  return (
    <>
      {title && <h1 className='text-3xl font-bold mt-8 mb-2 text-center'>{title}</h1>}
      {description && <p className='text-lg mb-6 text-center text-gray-700 dark:text-gray-300'>{description}</p>}
    </>
  );
};

export default Playground;
