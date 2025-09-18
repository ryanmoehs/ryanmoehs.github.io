import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

function RootLayout({ children, title, description }: RootLayoutProps) {
  return (
    <div className="font-main">
      <Navbar />
      <div className='min-h-screen w-full flex flex-col bg-amber-100 text-black dark:bg-slate-900 dark:text-white relative z-10'>
        {title && (
          <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-2 text-center px-4">{title}</h1>
        )}
        {description && (
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-700 dark:text-gray-300 px-4 max-w-3xl mx-auto">{description}</p>
        )}
        {children ? children : <Outlet />}
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;