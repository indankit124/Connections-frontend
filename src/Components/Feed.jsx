import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeed,
  addInterestedRequest,
  addIgnoredRequest,
} from "../utils/loginInfoSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.loginInfo.feed);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch feed
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch("http://localhost:3000/user/feed", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
          dispatch(addFeed(data));
        } else {
          alert(data.message || "Failed to load feed");
        }
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };

    fetchFeed();
     const interval = setInterval(fetchFeed, 5000);
     return () => clearInterval(interval);
  }, []);


  
  const handleAction = async (status, userId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/request/send/${status}/${userId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      // ✅ Save into Redux
      if (status === "interested") {
        dispatch(addInterestedRequest(data.data));
      } else if (status === "ignored") {
        dispatch(addIgnoredRequest(data.data));
      }

      setCurrentIndex((prev) => prev + 1);
    } catch (err) {
      console.error("Error sending request:", err);
    }
  };

  if (!feed.length || currentIndex >= feed.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg font-medium text-gray-500">
          No more users in your feed
        </p>
      </div>
    );
  }

  const user = feed[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Profile Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center border border-gray-100">
        <div className="flex flex-col items-center">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-36 h-36 rounded-full object-cover shadow-md border border-gray-200"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 mt-2">{user.about}</p>
          <p className="text-gray-400 text-sm mt-1 capitalize">{user.gender}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={() => handleAction("ignored", user._id)}
          className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl shadow-sm transition font-medium"
        >
          👎 Pass
        </button>
        <button
          onClick={() => handleAction("interested", user._id)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm transition font-medium"
        >
          👍 Interested
        </button>
      </div>
    </div>
  );
};

export default Feed;
