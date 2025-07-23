import { titleChange } from "../utils/titleChanger"
import Card from "../components/Card"

const Projects = () => {
  titleChange("ryanmoehs - Projects")
  return (
    <div className="flex flex-col justify-center gap-4 p-4">
      <div className="gap-2">
        <h1 className="text-2xl font-bold text-black text-center dark:text-white">Projects</h1>
        <h1 className="text-lg text-black text-center dark:text-white">Various Ryan's projects</h1>  
      </div>
      <div className="grid grid-cols-3 gap-y-4 gap-x-4">
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">EMisi</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Card>
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Card>
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Card>
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Card>
        <Card>
          <h1 className="text-lg text-black font-bold dark:text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Card>
      </div>
    </div>
  )
}

export default Projects