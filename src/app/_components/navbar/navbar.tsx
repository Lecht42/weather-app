// NavBar.js или NavBar.tsx если используете TypeScript
import React from 'react';
import NavLink from './nav-link/nav-link';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center bg-white shadow-md py-4">
        <NavLink path="/persons">Persons</NavLink>
        <NavLink path="/saved-persons">Saved</NavLink>
      </ul>
    </nav>
  );
}
