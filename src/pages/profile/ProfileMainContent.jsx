import CourseCardProfile from "./CourseCardProfile";

const ProfileMainContent = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="space-y-4">
        <CourseCardProfile
          title="Programming Basics"
          author="John Smith"
          progress={25}
        />
        <CourseCardProfile
          title="Programming Basics"
          author="John Smith"
          progress={25}
        />
        <CourseCardProfile
          title="Programming Basics"
          author="John Smith"
          progress={25}
        />
      </div>
    </div>
  );
};
export default ProfileMainContent;
