import { useEffect } from "react";
import Course from "./Course";
import CourseHeader from "./CourseHeader";
import { useCoursesStore } from "../../stores/useCoursesStore";
import { Loader } from "lucide-react";

const Courses = () => {
  const { courses, getAllCourses, loading } = useCoursesStore((state) => state);
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);
  console.log(courses);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200 py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <CourseHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
          {courses?.map((course) => (
            <Course
              id={course.CourseId}
              key={course.CourseId}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              price={course.price}
              image={course.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
