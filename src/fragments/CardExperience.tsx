import Card from "../components/Card";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";

interface CardExperienceProps {
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const CardExperience = ({ image, children }: CardExperienceProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const mainContent = childrenArray.filter((child: any) => child?.type?.displayName !== "Footer");
  const footer = childrenArray.find((child: any) => child?.type?.displayName === "Footer");
  return (
    <Card className='p-4 sm:p-6 lg:p-8 rounded-lg '>
      {image && <img src={image} alt='Product image' className='w-full h-32 sm:h-40 object-cover rounded-t-2xl' />}
      <div className='flex flex-col flex-1 gap-y-2 p-2 sm:p-4'>
        {mainContent}
        <div className='mt-auto'>{footer}</div>
      </div>
    </Card>
  );
};

const OrgPic = (props: any) => {
  return (
    <div className='w-16 sm:w-20 lg:w-25 p-2 rounded-lg'>
      <img
        // src='https://media.licdn.com/dms/image/v2/C4D0BAQFuUirBWTzjYg/company-logo_200_200/company-logo_200_200/0/1658471918606/techbrosgroup_logo?e=1756944000&v=beta&t=QObu_YsQwlz0vOd258iCLIVfpKBSoLy7eJk87nagPvw'
        src={props.orgPic}
        alt='logo'
        className='rounded-lg w-full h-auto'
      />
    </div>
  );
};

const Heading = (props: any) => {
  return (
    <>
      {/* <h1 className='font-bold text-2xl'>Frontend Developer</h1> */}
      <h1 className='font-bold text-lg sm:text-xl lg:text-2xl'>{props.position}</h1>
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-x-4'>
        <div className='flex gap-x-2 items-center'>
          <HiOutlineOfficeBuilding />
          {/* <h3 className='text-sm'>Techbros</h3> */}
          <h3 className='text-xs sm:text-sm'>{props.orgComp}</h3>
        </div>
        <div className='flex gap-x-2 items-center'>
          <MdLocationPin />
          {/* <h3 className='text-sm'>Bandung, Indonesia</h3> */}
          <h3 className='text-xs sm:text-sm'>{props.location}</h3>
        </div>
        <div className='flex gap-x-2 items-center'>
          <MdCalendarMonth />
          {/* <h3 className='text-sm'> Sep 2023 - Jan 2024</h3> */}
          <h3 className='text-xs sm:text-sm'>{props.duration}</h3>
        </div>
      </div>
    </>
  );
};

const Description = (props: any) => {
  return (
    <div className="px-2 sm:px-4 mt-2 sm:mt-4">
      <ul className="list-disc">
        <li className="text-sm sm:text-base">{props.description}</li>
      </ul>
    </div>
  );
};

CardExperience.OrgPic = OrgPic;
CardExperience.Heading = Heading;
CardExperience.Description = Description;

export default CardExperience;
