import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <nav className="w-full">
      <ul className="navbar flex w-full items-center justify-between text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { Navbar };
