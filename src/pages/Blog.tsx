import { titleChange } from "../utils/titleChanger"

interface BlogProps {
  title: string;
  description: string;
}

const Blog = ({title, description}: BlogProps) => {
    titleChange('ryanmoehs - Blog')
  return (
    <div className="flex">
        {title && <h1 className='text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-2 text-center'>{title}</h1>}
      {description && <p className='text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300 max-w-3xl'>{description}</p>}
      <div className='flex flex-col gap-y-2 w-full max-w-md sm:max-w-lg lg:max-w-xl'></div>
    </div>
  )
}

export default Blog