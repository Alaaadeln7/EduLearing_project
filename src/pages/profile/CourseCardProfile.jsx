const CourseCardProfile = ({ title, author, progress }) => {
  return (
    <div className="border border-base-300 rounded-md p-4 space-y-3">
      <div className="flex justify-between text-sm text-gray-500">
        <div className="space-x-2">
          <span className="badge">4 Weeks</span>
          <span className="badge">Beginner</span>
        </div>
        <p>By {author}</p>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">
        Programming Basics requires understanding variables, data types,
        conditionals, loops, and functions. It focuses on building logical
        thinking and writing simple, structured code
      </p>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-orange-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <button className="btn btn-block">Continue Course</button>
    </div>
  );
};

export default CourseCardProfile;
