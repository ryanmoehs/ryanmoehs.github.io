import { titleChange } from "../utils/titleChanger";
import Button from "../components/Button";
// import Card from "../components/Card";
import { Link } from "react-router";
import { IoMdDocument } from "react-icons/io";

const Home = () => {
  titleChange("ryanmoehs");
  return (
    <div>
      <div className='flex flex-col text-center justify-center gap-y-4 p-4'>
        <h1 className='text-6xl font-semibold'>
          Hello! I'm <br />
          <span className='underline'>Ryan Muhammad Satria</span>
        </h1>
        <h1 className='text-4xl font-semibold'>
          a <span className='text-amber-800 dark:text-cyan-500'>Web Developer</span>
        </h1>

        <div className='flex justify-center gap-x-4'>
          <Link to='https://drive.google.com/file/d/1ZFl1GLDERMjnBrVOaIQD--yGrrcFwadz/view?usp=sharing' target='_blank'>
            <Button color='bg-amber-400 dark:bg-cyan-600'><IoMdDocument/> My CV</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
