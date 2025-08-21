import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const userInfo = useSelector((state) => state.loginInfo.info);
  const data = userInfo;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-gray-200 to-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 bg-gradient-to-r from-pink-600 to-yellow-400 py-4">
        {/* Logo */}
        <div className="w-1/6">
          <h1 className="text-4xl shadow-lg font-bold text-black">CONNECTion#</h1>
        </div>

        {/* Navigation Links */}
        <div className="w-4/6">
          <ul className="flex justify-evenly items-center font-mono font-extrabold text-lg cursor-pointer">
            <Link to="/loggedInPage">
              <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-900">
                Home
              </li>
            </Link>
            <Link to="followRequest">
              <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-900">
                Follow requests
              </li>
            </Link>
            <Link to="userProfile">
              <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-900">
                Update Profile
              </li>
            </Link>
            
            {/* <Link to="feed">
              <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-900">
                Feed
              </li>
            </Link> */}
            <Link to="messages">
              <li className="transition-transform duration-200 hover:scale-110 hover:text-gray-900">
                Messages
              </li>
            </Link>

            {/* User Avatar + Dropdown */}
            <li className="relative flex items-center gap-3 ml-4">
              <img
                className="w-14 h-14 object-cover rounded-full border border-gray-300"
                src={data.photoUrl}
                alt="User Avatar"
              />
              <span className="font-sans text-sm text-gray-800">
                Hello, {data.firstName}
              </span>

              {/* Dropdown Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="ml-2 px-2 py-1 bg-white rounded shadow hover:bg-gray-100"
              >
                ▼
              </button>

              {/* Dropdown Menu */}
              {open && (
                <ul className="absolute right-0 top-16 bg-white border rounded-lg shadow-md w-48 z-10">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    View Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                    Logout
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
