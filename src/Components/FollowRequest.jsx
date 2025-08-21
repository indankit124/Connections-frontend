import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriendRequest } from "../utils/loginInfoSlice";

const FollowRequest = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.loginInfo.friendRequest);

  useEffect(() => {
    const getFollowRequest = async () => {
      try {
        const res = await fetch("http://localhost:3000/user/requests", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          dispatch(addFriendRequest(data));
        }
      } catch (err) {
        console.error("Error fetching follow requests:", err);
      }
    };

    getFollowRequest();

    const interval = setInterval(getFollowRequest, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  // ✅ Accept request
  const acceptingRequest = async (requestId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/request/review/accepted/${requestId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (res.ok) {
        // remove from redux immediately
        dispatch(
          addFriendRequest(requests.filter((req) => req._id !== requestId))
        );
      }
    } catch (err) {
      console.error("Error accepting request:", err);
    }
  };

  // ✅ Reject request
  const rejectingRequest = async (requestId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/request/review/rejected/${requestId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (res.ok) {
        dispatch(
          addFriendRequest(requests.filter((req) => req._id !== requestId))
        );
      }
    } catch (err) {
      console.error("Error rejecting request:", err);
    }
  };

  return (
    <div className=" ">
      {requests && requests.length > 0 ? (
        requests.map((req) => (
          <div
            className="bg-slate-50 p-4 rounded-xl shadow-md flex items-center gap-4 m-5 justify-between"
            key={req._id}
          >
            <div className="flex m-3">
              <img
                className=" w-10 mr-3"
                src={req.fromUserId.photoUrl}
                alt=""
              />
              <h1 className="pt-2">
                {req.fromUserId.firstName} {req.fromUserId.lastName}
              </h1>
            </div>

            <div className="mr-20 ">
              <button
                className="mr-10 bg-green-500 p-2  px-4 font-mono rounded-2xl hover:scale-110 duration-700"
                onClick={() => acceptingRequest(req._id)}
              >
                Accept
              </button>
              <button
                className="mr-10 bg-red-500 p-2  px-4 font-mono rounded-2xl hover:scale-110 duration-700"
                onClick={() => rejectingRequest(req._id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No follow requests</p>
      )}
    </div>
  );
};

export default FollowRequest;
