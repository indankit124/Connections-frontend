import { useNavigate } from "react-router-dom";
import image1 from "../../resourses/image1.png";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-gray-600 to-white">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-5xl pt-9 pl-5 font-bold text-black">CONNECTion#</h1>
        <h2 className="text-4xl font-mono pt-9 pr-5 font-bold text-black">
          Make_connections_beyond_work
        </h2>
      </div>

      {/* Main content */}
      <div className="flex">
        {/* Left section */}
        <div className="mt-32 ml-28">
          <h1 className="text-7xl font-bold text-black">Swipe. Connect.</h1>
          <h1 className="text-8xl font-bold text-black">Grow.</h1>
          <p className="w-[700px] text-xl pl-2 pt-10 opacity-65">
            Meet like-minded professionals in a casual, low-pressure way. Curated
            profiles, meaningful conversations, and lightweight intros.
          </p>

          {/* Buttons */}
          <div className="flex mt-16">
            <button
              className="px-12 py-2 border bg-slate-200 border-black font-bold rounded-2xl text-2xl mr-5 ml-3 hover:bg-slate-900 hover:text-white hover:px-28 duration-700"
              onClick={() => navigate("/signIn")}
            >
              SignIn
            </button>

            <button
              className="px-20 border border-black font-bold rounded-2xl text-2xl bg-slate-900 text-white hover:bg-slate-400 hover:text-black hover:px-28 duration-700"
              onClick={() => navigate("/signUp")}
            >
              SignUp
            </button>
          </div>
        </div>

        {/* Right section (image) */}
        <img
          className="w-[630px] mt-[70px] rounded-3xl"
          src={image1}
          alt="connection illustration"
        />
      </div>
    </div>
  );
};

export default Home;
