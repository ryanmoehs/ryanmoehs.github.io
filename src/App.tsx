import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import RootLayout from './layouts/RootLayout'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='project' element={<Projects />}/>
        <Route path='experience' element={<Experiences />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
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