import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { Menu } from '@components';
import { Icon } from '@components/icons';

const Nav = () => (
  <header className="bg-tertiary text-white uppercase h-16 flex w-full">
    <div className="max-w-5xl w-full flex mx-auto">
      <div className="w-16 my-auto mx-0 min-w-10">
        <Link to="/" ><Icon name="Logo" customClass="max-w-full h-auto m-1" /></Link>
      </div>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <div className="ml-auto mr-4 relative my-auto h-fit pt-2">
          <ThemeToggleBtn />
        </div>
      </Suspense> */}

      <Menu />

      <div className="ml-auto my-auto text-lg hidden lg:flex md:flex xl:flex 2xl:flex">
        {navLinks.map(({ url, name }) => (
          <Link key={name} to={url} className="py-1 px-4 text-gray-300 font-sans font-semibold">
            {name}
          </Link>
        ))}
      </div>
    </div>
  </header>
);

export default Nav;
