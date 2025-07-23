import { titleChange } from "../utils/titleChanger";
import Card from "../components/Card";

const Experiences = () => {
  titleChange("ryanmoehs - Experiences");
  return (
    <div className='flex flex-col items-center gap-y-2'>
      <h1 className='text-2xl font-semibold text-white'>Experiences</h1>
      <p className='text-medium text-white'>Various Ryan's experience</p>
      <div className='flex flex-col gap-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          {/* <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div>
          <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div> */}
          <Card>Test 1</Card>
          <Card>Test 1</Card>
          <Card>Test 1</Card>
          <Card>Test 1</Card>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div>
          <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div>
          <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div>
          <div className='p-6 items-center bg-slate-600 rounded-lg'>Test 1</div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
