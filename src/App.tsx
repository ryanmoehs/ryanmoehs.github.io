import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
// import Playground from './pages/Playground'
import Playground from './pages/Playground'
import NotFound from './pages/NotFound'
import RootLayout from './layouts/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='project' element={<Projects title="Projects" description="All of my projects, both technical and non-technical"/>}/>
        <Route path='experience' element={<Experiences title="Experience" description="All my experiences" />}/>
        <Route path='contact' element={<Contact title="Contact" description="Feel free to contact and connect. I'll reply ASAP"/>}/>
        <Route path='playground' element={<Playground title="Playground" description="Coming soon"/>}/>
        <Route path="*" element={<NotFound title="404 Not Found" description="Oops! I think you go to the wrong address"/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App