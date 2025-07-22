import { titleChange } from '../utils/titleChanger'

const NotFound = () => {
    titleChange("Not Found")
  return (
    <div>
        <h1 className="text-lg">
          404 Not Found
        </h1>
    </div>
  )
}

export default NotFound