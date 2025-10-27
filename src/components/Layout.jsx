import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Outlet es el marcador de posición donde React Router
            renderizará tu HomePage, DiccionarioPage, etc. */}
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;