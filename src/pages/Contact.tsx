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
    <div className='flex flex-col items-center'>
      {title && <h1 className='text-3xl font-bold mt-8 mb-2 text-center'>{title}</h1>}
      {description && <p className='text-lg mb-6 text-center text-gray-700 dark:text-gray-300'>{description}</p>}
      <div className='flex flex-col gap-y-2 w-200 '>
        <Link to='http://linkedin.com/in/ryanmsatria'>
          <div className='w-full p-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold flex gap-x-4 items-center rounded-lg'>
            <FaLinkedin />
            LinkedIn
          </div>
        </Link>
        <Link to='http://github.com/ryanmoehs'>
          <div className='w-full p-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold flex gap-x-4 items-center rounded-lg'>
            <FaGithub />
            Github
          </div>
        </Link>
        <div className='w-full flex flex-col justify-between gap-y-2 p-4 bg-pink-800 text-white rounded-lg'>
          <h2 className='text-lg font-semibold'>Email</h2>
          <div className='grid grid-cols-2 gap-x-2'>
            <div className='flex gap-x-4 items-center p-4 border rounded-lg border-pink-500'>
              <FaMailBulk />
              <Link to='mailto:ryanmsatria@gmail.com'>My Email</Link>
            </div>
            <div className='flex flex-col gap-y-2 p-2 border border-pink-500 rounded-lg'>
              <h2 className='font-semibold'>Quick Menu</h2>
              <div className='flex gap-x-4 items-center p-4 border rounded-lg border-pink-500 hover:bg-pink-700'>
                <FaMailBulk />
                <Link to='mailto:ryanmsatria@gmail.com?subject=Project%20Discussion'>Project Discussion</Link>
              </div>
              <div className='flex gap-x-4 items-center p-4 border rounded-lg border-pink-500 hover:bg-pink-700'>
                <FaMailBulk />
                <Link to='mailto:ryanmsatria@gmail.com?subject=Job%20Opportunity'>Job Opportunity</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-6'>
        <p className='text-lg mb-6 text-center text-gray-700 dark:text-gray-300'>or.. if you want to contact me anonymously, you can consider fill the form below</p>
        <div className='flex flex-col gap-y-2'>
          <textarea name='anon_form' id='anon_form' placeholder='just fill this form' className='bg-amber-400 dark:bg-slate-600 rounded-lg p-4'></textarea>
          <button className='w-50 p-2 rounded-lg self-end bg-amber-500 dark:bg-cyan-700'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
