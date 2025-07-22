import { titleChange } from "../utils/titleChanger"
import Card from "../components/Card"

const Projects = () => {
  titleChange("ryanmoehs - Projects")
  return (
    <div className="flex flex-col justify-center gap-4 p-4">
      <h1 className="text-lg font-semibold text-white">Projects Page</h1>
      <div className="flex flex-col gap-y-4">
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
        <Card>
          <h1 className="text-lg text-white">Project 1</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, totam. Porro dolorum, quae vel dolor laudantium libero adipisci? Assumenda in officiis, nobis nulla aspernatur aperiam quaerat. Sequi incidunt animi aperiam!</p>
        </Card>
      </div>
    </div>
  )
}

export default Projects