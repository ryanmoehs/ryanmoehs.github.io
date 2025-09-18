import { titleChange } from "../utils/titleChanger";
import { Link } from "react-router";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

interface ContactProps {
  title: string;
  description: string;
}

const Contact = ({ title, description }: ContactProps) => {
  titleChange("ryanmoehs - Contact");
  return (
    <div className='flex flex-col items-center px-4'>
      {title && <h1 className='text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-2 text-center'>{title}</h1>}
      {description && <p className='text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300 max-w-3xl'>{description}</p>}
      <div className='flex flex-col gap-y-2 w-full max-w-md sm:max-w-lg lg:max-w-xl'>
        <Link to='http://linkedin.com/in/ryanmsatria'>
          <div className='w-full p-3 sm:p-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold flex gap-x-2 sm:gap-x-4 items-center rounded-lg text-sm sm:text-base'>
            <FaLinkedin />
            LinkedIn
          </div>
        </Link>
        <Link to='http://github.com/ryanmoehs'>
          <div className='w-full p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold flex gap-x-2 sm:gap-x-4 items-center rounded-lg text-sm sm:text-base'>
            <FaGithub />
            Github
          </div>
        </Link>
        <div className='w-full flex flex-col justify-between gap-y-2 p-3 sm:p-4 bg-pink-800 text-white rounded-lg'>
          <h2 className='text-base sm:text-lg font-semibold'>Email</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='flex gap-x-2 sm:gap-x-4 items-center p-3 sm:p-4 border rounded-lg border-pink-500 text-sm sm:text-base'>
              <FaMailBulk />
              <Link to='mailto:ryanmsatria@gmail.com'>My Email</Link>
            </div>
            <div className='flex flex-col gap-y-2 p-2 border border-pink-500 rounded-lg'>
              <h2 className='font-semibold text-sm sm:text-base'>Quick Menu</h2>
              <div className='flex gap-x-2 sm:gap-x-4 items-center p-2 sm:p-4 border rounded-lg border-pink-500 hover:bg-pink-700 text-xs sm:text-sm'>
                <FaMailBulk />
                <Link to='mailto:ryanmsatria@gmail.com?subject=Project%20Discussion'>Project Discussion</Link>
              </div>
              <div className='flex gap-x-2 sm:gap-x-4 items-center p-2 sm:p-4 border rounded-lg border-pink-500 hover:bg-pink-700 text-xs sm:text-sm'>
                <FaMailBulk />
                <Link to='mailto:ryanmsatria@gmail.com?subject=Job%20Opportunity'>Job Opportunity</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-4 sm:mt-6 w-full max-w-md sm:max-w-lg lg:max-w-xl'>
        <p className='text-sm sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300'>or.. if you want to contact me anonymously, you can consider fill the form below</p>
        <div className='flex flex-col gap-y-2'>
          <textarea name='anon_form' id='anon_form' placeholder='just fill this form' className='bg-amber-400 dark:bg-slate-600 rounded-lg p-3 sm:p-4 text-sm sm:text-base h-24 sm:h-32'></textarea>
          <button className='w-20 sm:w-50 p-2 rounded-lg self-end bg-amber-500 dark:bg-cyan-700 text-sm sm:text-base'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
