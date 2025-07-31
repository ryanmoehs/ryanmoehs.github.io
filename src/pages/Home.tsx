import { titleChange } from "../utils/titleChanger";
import Button from "../components/Button";
// import Card from "../components/Card";
import { Link } from "react-router";
import { IoMdDocument } from "react-icons/io";
import { FaLaravel, FaReact, FaLinux, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Home = () => {
  titleChange("ryanmoehs");
  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='flex items-center justify-center min-h-screen w-full'>
          <div className='flex p-2 gap-x-4'>
            <div className='flex flex-col justify-between gap-y-4 p-4'>
              <h1 className='text-6xl font-semibold'>
                Hello! I'm <br />
                <span className='dark:animate-dark-name'>Ryan Muhammad Satria</span>
              </h1>
              <h1 className='text-5xl font-semibold'>
                a <span className='text-amber-800 dark:text-cyan-500'>Web Developer</span>
              </h1>

              <div className='flex gap-x-4'>
                <Link to='https://drive.google.com/file/d/1ZFl1GLDERMjnBrVOaIQD--yGrrcFwadz/view?usp=sharing' target='_blank'>
                  <Button color='bg-amber-400 dark:bg-cyan-600'>
                    <IoMdDocument /> My CV
                  </Button>
                </Link>
              </div>
            </div>
            <div className='flex'>
              <div className="rounded-full overflow-hidden bg-amber-500 dark:bg-cyan-600 animate-rotate-logo w-fit h-fit flex items-center justify-center">
                <img src='foto_ryan_transparrent.webp' alt="ryan's reveal" className="object-cover w-80 h-80"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-100 flex items-center justify-center flex-col gap-y-2 p-16'>
        <h2 className='text-2xl font-bold text-center'>Aspiring Information Systems professional with hands-on experience in
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-amber-500 dark:before:bg-cyan-500">
            <span className="relative text-white dark:text-gray-950">web development</span>
          </span>.
Proven ability to work in collaborative teams and deliver user-focused solutions across internships, academic projects, and organizational
roles.</h2>
      </div>
      <div className='flex flex-col gap-y-2 p-16'>
        <h2 className='text-2xl font-bold text-center'>Skills</h2>
        <div className='grid grid-cols-5 gap-x-4 items-center w-full mt-8 p-4'>
          <div className='flex flex-col gap-y-4  bg-amber-500 dark:bg-slate-500 p-10 justify-center items-center rounded-lg text-2xl font-bold'>
            <FaLaravel />
            Laravel
          </div>
          <div className='flex flex-col gap-y-4 bg-amber-500 dark:bg-slate-500 p-10 justify-center items-center rounded-lg text-2xl font-bold'>
            <FaReact />
            React.js
            </div>
          <div className='flex flex-col gap-y-4 bg-amber-500 dark:bg-slate-500 p-10 justify-center items-center rounded-lg text-2xl font-bold'>
            <SiMysql />
            MySQL
            </div>
          <div className='flex flex-col gap-y-4 bg-amber-500 dark:bg-slate-500 p-10 justify-center items-center rounded-lg text-2xl font-bold'>
            <FaPython />
            Python
            </div>
          <div className='flex flex-col gap-y-4 bg-amber-500 dark:bg-slate-500 p-10 justify-center items-center rounded-lg text-2xl font-bold'>
            <FaLinux />
            Linux
            </div>
        </div>
      </div>
      <div className=' items-center w-full mt-8 p-16'>
        <div className='flex bg-amber-500 dark:bg-slate-500 p-10 justify-center rounded-lg '>Coming soon</div>
      </div>
    </>
  );
};

export default Home;
