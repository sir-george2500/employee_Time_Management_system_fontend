import React from 'react';

const Sidebar = () => {
  return (
    <div className="ml-2 mt-2 h-screen bg-stone-900 w-80 rounded-lg shadow-lg">
      <div className="p-4">
        <h1 className="text-white text-2xl font-bold mb-4">Dashboard</h1>
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
            <a href="#" className="flex items-center text-white transition-all duration-300 hover:text-blue-500 px-2 py-1 rounded-md">
              <i className="fas fa-chart-bar mr-2"></i>
              Overview
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-white transition-all duration-300 hover:text-blue-500 px-2 py-1 rounded-md">
              <i className="fas fa-users mr-2"></i>
              Employee
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-white transition-all duration-300 hover:text-blue-500 px-2 py-1 rounded-md">
              <i className="fas fa-user-graduate mr-2"></i>
              Student
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-stone-800">
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
            <a href="#" className="flex items-center text-white transition-all duration-300 hover:text-blue-500 px-2 py-1 rounded-md">
              <i className="far fa-calendar-alt mr-2"></i>
              Attendance
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-white transition-all duration-300 hover:text-blue-500 px-2 py-1 rounded-md">
              <i className="far fa-file-alt mr-2"></i>
              Generate Report
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
