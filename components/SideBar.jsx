import React from 'react';

const Sidebar = () => {
  // Add your sidebar content here
  return (
    <div className="ml-2 mt-2 h-screen bg-stone-900 w-80 ">
      <ul className='pt-2'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;