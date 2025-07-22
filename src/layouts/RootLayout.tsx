import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
    
  return (
    <div className="font-main">
    <Navbar />
      <div className='min-h-screen w-full items-center align-middle justify-center flex bg-amber-200 dark:bg-slate-900 text-white'>
          <Outlet />
      </div>
    <Footer />
    </div>
  )
}



export default RootLayout