import ProfileMainContent from "./ProfileMainContent";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="bg-warning rounded-t-md p-4 text-content font-bold text-lg">
        MY PROFILE
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ProfileSidebar />
        <div className="flex-1 bg-base-100 p-6 rounded shadow-md">
          <ProfileMainContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
