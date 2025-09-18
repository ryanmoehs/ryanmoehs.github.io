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
        <div className='flex items-center justify-center min-h-screen w-full px-4'>
          <div className='flex flex-col lg:flex-row items-center lg:items-start p-2 gap-y-8 lg:gap-x-8 lg:gap-y-0 max-w-6xl'>
            {/* Text Content */}
            <div className='flex flex-col justify-center gap-y-6 p-4 text-center lg:text-left'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
                Hello! I'm <br />
                <span className='dark:animate-dark-name'>Ryan Muhammad Satria</span>
              </h1>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                a <span className='text-amber-800 dark:text-cyan-500'>Web Developer</span>
              </h1>

              <div className='flex justify-center lg:justify-start gap-x-4'>
                <Link to='https://drive.google.com/file/d/1ZFl1GLDERMjnBrVOaIQD--yGrrcFwadz/view?usp=sharing' target='_blank'>
                  <Button color='bg-amber-400 dark:bg-cyan-600'>
                    <IoMdDocument /> My CV
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className='flex justify-center lg:justify-end'>
              <div className="rounded-full overflow-hidden bg-amber-500 dark:bg-cyan-600 animate-rotate-logo w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <img src='foto_ryan_transparrent.webp' alt="ryan's reveal" className="object-cover w-full h-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description Section */}
      <div className='flex items-center justify-center flex-col gap-y-4 p-8 md:p-16'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-center max-w-4xl leading-relaxed'>
          Aspiring Information Systems professional with hands-on experience in
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-amber-500 dark:before:bg-cyan-500 mx-2">
            <span className="relative text-white dark:text-gray-950">web development</span>
          </span>.
          Proven ability to work in collaborative teams and deliver user-focused solutions across internships, academic projects, and organizational roles.
        </h2>
      </div>
      
      {/* Skills Section */}
      <div className='flex flex-col gap-y-6 p-8 md:p-16'>
        <h2 className='text-2xl md:text-3xl font-bold text-center'>Skills</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl mx-auto'>
          <div className='flex flex-col gap-y-2 bg-amber-500 dark:bg-slate-500 p-4 md:p-6 lg:p-8 justify-center items-center rounded-lg text-sm md:text-lg lg:text-xl font-bold min-h-[120px] md:min-h-[140px]'>
            <FaLaravel className='text-2xl md:text-3xl lg:text-4xl' />
            <span className='text-center'>Laravel</span>
          </div>
          <div className='flex flex-col gap-y-2 bg-amber-500 dark:bg-slate-500 p-4 md:p-6 lg:p-8 justify-center items-center rounded-lg text-sm md:text-lg lg:text-xl font-bold min-h-[120px] md:min-h-[140px]'>
            <FaReact className='text-2xl md:text-3xl lg:text-4xl' />
            <span className='text-center'>React.js</span>
          </div>
          <div className='flex flex-col gap-y-2 bg-amber-500 dark:bg-slate-500 p-4 md:p-6 lg:p-8 justify-center items-center rounded-lg text-sm md:text-lg lg:text-xl font-bold min-h-[120px] md:min-h-[140px]'>
            <SiMysql className='text-2xl md:text-3xl lg:text-4xl' />
            <span className='text-center'>MySQL</span>
          </div>
          <div className='flex flex-col gap-y-2 bg-amber-500 dark:bg-slate-500 p-4 md:p-6 lg:p-8 justify-center items-center rounded-lg text-sm md:text-lg lg:text-xl font-bold min-h-[120px] md:min-h-[140px]'>
            <FaPython className='text-2xl md:text-3xl lg:text-4xl' />
            <span className='text-center'>Python</span>
          </div>
          <div className='flex flex-col gap-y-2 bg-amber-500 dark:bg-slate-500 p-4 md:p-6 lg:p-8 justify-center items-center rounded-lg text-sm md:text-lg lg:text-xl font-bold min-h-[120px] md:min-h-[140px] col-span-2 sm:col-span-1'>
            <FaLinux className='text-2xl md:text-3xl lg:text-4xl' />
            <span className='text-center'>Linux</span>
          </div>
        </div>
      </div>
      
      {/* Coming Soon Section */}
      <div className='flex items-center justify-center w-full p-8 md:p-16'>
        <div className='flex bg-amber-500 dark:bg-slate-500 p-6 md:p-10 justify-center rounded-lg w-full max-w-4xl'>
          <span className='text-lg md:text-xl font-bold'>Coming soon</span>
        </div>
      </div>
    </>
  );
};

export default Home;
