import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
    
  return (
    <div className="font-main">
    <Navbar />
      <div className='min-h-screen w-full items-center align-middle justify-center flex bg-amber-100 text-black dark:bg-slate-900 dark:text-white'>
          <Outlet />
      </div>
    <Footer />
    </div>
  )
}



export default RootLayout