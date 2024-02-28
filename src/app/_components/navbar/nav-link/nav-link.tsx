import React, { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  path: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  return (
    <li className="mx-2">
      <Link
        href={path}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
