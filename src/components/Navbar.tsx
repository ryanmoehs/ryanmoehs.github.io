import { NavLink } from "react-router";
import Button from "./Button";

export function Navbar() {
  return (
    <div className="sticky top-0 bg-amber-100 dark:bg-slate-800">
      <div className='flex items-center justify-between px-8 py-4'>
        <a href='#'>
          <img src='/favicon.ico' alt='ryanmoehs logo' className='w-12' />
        </a>
        <div>
          <ul className='font-semibold flex place-items-center gap-x-4 text-white'>
            <NavLink to='/'>
              <li>/home</li>
            </NavLink>
            <NavLink to='/project'>
              <li>/projects</li>
            </NavLink>
            <NavLink to='/experience'>
              <li>/experiences</li>
            </NavLink>
            <NavLink to='/contact'>
              <li>/contacts</li>
            </NavLink>
          </ul>
        </div>
        {/* <Button color='bg-cyan-700'>Tes</Button> */}
      </div>
    </div>
  );
}
