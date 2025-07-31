import Card from "../components/Card";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdLocationPin, MdCalendarMonth  } from "react-icons/md";


// interface CardExperienceProps {
//   image?: string;
//   children?: React.ReactNode;
//   className?: string;
// }

// const CardExperience = ({ image, children, className }: CardExperienceProps) => {
const CardExperience = () => {
  return (
    <Card className='p-8 rounded-lg '>
      <div className='flex space-x-4'>
        <div className='w-25 p-2 rounded-lg'>
          <img
            src='https://media.licdn.com/dms/image/v2/C4D0BAQFuUirBWTzjYg/company-logo_200_200/company-logo_200_200/0/1658471918606/techbrosgroup_logo?e=1756944000&v=beta&t=QObu_YsQwlz0vOd258iCLIVfpKBSoLy7eJk87nagPvw'
            alt='logo'
            className='rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-bold text-2xl'>Frontend Developer</h1>
          <div className="flex gap-x-4">
            <div className="flex gap-x-2 items-center">
              <HiOutlineOfficeBuilding /> 
              <h3 className='text-sm'>Techbros</h3>
            </div>
            <div className="flex gap-x-2 items-center">
              <MdLocationPin /> 
              <h3 className='text-sm'>Bandung, Indonesia</h3>
            </div>
            <div className="flex gap-x-2 items-center">
              <MdCalendarMonth /> 
              <h3 className='text-sm'> Sep 2023 - Jan 2024</h3>
            </div>
          </div>
          <ul>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores similique sequi expedita repellat non doloremque eaque sint dignissimos tempora illum, voluptatem molestiae atque repudiandae alias qui ullam ducimus quae?</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis ratione sit animi? Architecto temporibus ut officia, velit quia maxime. Distinctio rem harum illum consectetur facilis vero, fuga quidem tempore.</li>
            <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis ratione sit animi? Architecto temporibus ut officia, velit quia maxime. Distinctio rem harum illum consectetur facilis vero, fuga quidem tempore.</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CardExperience;
