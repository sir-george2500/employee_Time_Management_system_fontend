import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold">My Website</a>
          
          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li><a href="/services" className="text-white hover:text-gray-300">Logout</a></li>          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
