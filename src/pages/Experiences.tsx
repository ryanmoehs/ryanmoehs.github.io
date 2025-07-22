
import { titleChange } from "../utils/titleChanger"

const Experiences = () => {
  titleChange("ryanmoehs - Experiences")
  return (
    <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-2xl font-semibold text-white">Experiences Page</h1>
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-4 gap-4">
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
          <div className="p-6 items-center bg-slate-600 rounded-lg">Test 1</div>
        </div>
        </div>
    </div>
    
  )
}

export default Experiences