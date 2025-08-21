import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/loginInfoSlice";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const FeedAndConnectionPage = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.loginInfo.connections);

  // Fetch user connections
  const userConnections = async () => {
    try {
      const res = await fetch("http://localhost:3000/user/connections", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      console.log("Response:", data);

      if (res.ok) {
        dispatch(addConnections(data));
      } else {
        alert("Failed: " + (data.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("Error fetching connections:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  // Call on mount
  useEffect(() => {
    userConnections();
     const interval = setInterval(userConnections, 5000); 
  return () => clearInterval(interval);
  }, []
);

  return (
    <div className="flex h-screen">
      {/* Connections Sidebar */}
      <div className="bg-gray-50 p-8 w-1/3 overflow-y-auto">
        <h1 className="text-lg font-light mb-4">My Connections</h1>
        <ul>
          {connections?.length > 0 ? (
            connections.map((c, i) => (
              <li
                key={i} 
                className="p-2 mb-2 rounded-lg  shadow hover:bg-gray-100 flex"
              >
                <img className="w-[50px]" src={c.photoUrl} alt="" />{c.firstName} {c.lastName}
              </li>
            ))
          ) : (
            <p className="text-gray-600">No connections yet.</p>
          )}
        </ul>
      </div>

      {/* Feed Section */}
      <div className="bg-gray-100 w-2/3 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default FeedAndConnectionPage;
