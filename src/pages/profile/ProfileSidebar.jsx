import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";

const ProfileCard = () => {
  const { user } = useAuthStore((state) => state);
  console.log(user);
  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6 w-full max-w-xs">
      {/* Profile Image Section */}
      <div className="flex justify-between mb-6">
        <div className="avatar mb-3">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <button className="btn btn-soft px-4 h-7 text-xs font-medium rounded-4xl">
          Upload Photo
        </button>
      </div>

      {/* Account Info Cards */}
      <div className="space-y-4">
        {/* Name Card */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Your Name</p>
          <p className="font-medium">
            {user?.firstName + " " + user?.lastName}
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Email</p>
          <p className="font-medium">{user?.email}</p>
        </div>

        {/* Phone Card */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">Phone Number</p>
          <p className="font-medium">{user?.phoneNumber || "N/A"}</p>
        </div>

        {/* About Card */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-1">
            About{" "}
            <span className="text-orange-500 font-semibold">
              {user?.firstName}
            </span>
          </p>
          <p className="text-sm text-gray-700">{user?.description || "N/A"}</p>
        </div>
      </div>

      {/* Browse Courses Button */}
      <Link
        to="/courses"
        className="btn btn-warning w-full mt-6 py-2 rounded-md font-medium"
      >
        Browse Courses
      </Link>
    </div>
  );
};

export default ProfileCard;
