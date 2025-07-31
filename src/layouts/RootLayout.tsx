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
      <div className='min-h-screen w-full flex flex-col bg-amber-100 text-black dark:bg-slate-900 dark:text-white'>
        {title && (
          <h1 className="text-3xl font-bold mt-8 mb-2 text-center">{title}</h1>
        )}
        {description && (
          <p className="text-lg mb-6 text-center text-gray-700 dark:text-gray-300">{description}</p>
        )}
        {children ? children : <Outlet />}
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;