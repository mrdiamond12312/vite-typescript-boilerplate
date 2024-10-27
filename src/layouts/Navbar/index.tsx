import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { path } from '@/constants/path';

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="px-12 bg-neutral-3 h-20 text-white flex flex-row items-center justify-between sticky top-0 left-0 z-10">
        <Link to={path.HOMEPAGE} className="text-heading-4">
          LOGO
        </Link>
      </div>
      <div className="border-2 rounded-xl min-h-[calc(100vh-160px)] h-fit max-w-7xl w-11/12 mx-auto my-4">
        <Outlet />
        <div>Children route</div>
      </div>
      <div className="px-12 bg-neutral-3 h-12 w-full text-white flex flex-row items-center justify-center">
        <span className="text-heading-5">FOOTER</span>
      </div>
    </div>
  );
};

export default NavBar;
