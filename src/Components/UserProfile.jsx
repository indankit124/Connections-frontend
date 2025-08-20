import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo } from "../utils/loginInfoSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.loginInfo.info);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userInfo);

  useEffect(() => {
    setFormData(userInfo);
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age") {
      setFormData((prev) => ({ ...prev, age: value === "" ? null : Number(value) }));
    } else if (name === "skills") {
      setFormData((prev) => ({
        ...prev,
        skills: value.split(",").map((s) => s.trim()).filter(Boolean),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photoUrl: imageUrl }));
    }
  };

  const handleSave = async () => {
    try {
      const allowedKeys = [
        "firstName", "lastName", "age", "gender", "about", "skills", "photoUrl", "currentJob",
      ];

      const updateData = allowedKeys.reduce((acc, key) => {
        acc[key] = formData[key] ?? "";
        return acc;
      }, {});

      const res = await fetch("http://localhost:3000/profile/edit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updateData),
      });

      if (!res.ok) throw new Error("Failed to update profile");

      const updatedUser = await res.json();
      setFormData(updatedUser);
      dispatch(updateInfo(updatedUser));
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setFormData(userInfo);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      {/* Left Side - Profile */}
      <div className="bg-white shadow-lg rounded-3xl p-6 w-full lg:w-[500px] flex flex-col items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl mb-6">
          <img
            src={formData.photoUrl}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {!isEditing ? (
          <>
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold">{formData.firstName} {formData.lastName}</h1>
              <p className="text-gray-500">{formData.emailId}</p>
            </div>

            <div className="space-y-2 text-gray-700 w-full px-4">
              <p><span className="font-semibold">Gender:</span> {formData.gender}</p>
              <p><span className="font-semibold">Age:</span> {formData.age}</p>
              <p><span className="font-semibold">Account Created:</span> {formData.createdAt}</p>
              <p><span className="font-semibold">Last Updated:</span> {formData.updatedAt}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 bg-gradient-to-r from-red-500 to-pink-400 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 w-full px-4">
              <input type="file" accept="image/*" onChange={handlePhotoChange} className="border rounded-lg p-2" />
              <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleChange} className="border rounded-lg p-2" placeholder="First Name" />
              <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleChange} className="border rounded-lg p-2" placeholder="Last Name" />
              <input type="email" name="emailId" value={formData.emailId || ""} disabled className="border rounded-lg p-2 bg-gray-200 cursor-not-allowed" />
              <input type="text" name="gender" value={formData.gender || ""} onChange={handleChange} className="border rounded-lg p-2" placeholder="Gender" />
              <input type="number" name="age" value={formData.age ?? ""} onChange={handleChange} className="border rounded-lg p-2" placeholder="Age" min="18" max="120" />
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors">Save</button>
              <button onClick={handleCancel} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full transition-colors">Cancel</button>
            </div>
          </>
        )}
      </div>

      {/* Right Side - About / Skills / Job */}
      <div className="flex flex-col gap-6 w-full lg:w-[500px]">
        <div className="bg-white shadow-lg rounded-xl p-6 min-h-[100px]">
          {!isEditing ? (
            <p className="text-gray-700"><span className="font-semibold">About Me:</span> {formData.about}</p>
          ) : (
            <textarea
              name="about"
              value={formData.about || ""}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full h-28 resize-none"
              placeholder="About Me"
            />
          )}
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 min-h-[80px]">
          {!isEditing ? (
            <p className="text-gray-700"><span className="font-semibold">Skills:</span> {formData.skills?.join(", ")}</p>
          ) : (
            <input
              type="text"
              name="skills"
              value={formData.skills?.join(", ") || ""}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              placeholder="Skills (comma separated)"
            />
          )}
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 min-h-[80px]">
          {!isEditing ? (
            <p className="text-gray-700"><span className="font-semibold">Current Job:</span> {formData.currentJob}</p>
          ) : (
            <input
              type="text"
              name="currentJob"
              value={formData.currentJob || ""}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              placeholder="Current Job"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
