import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Search Video Info
        </p>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
