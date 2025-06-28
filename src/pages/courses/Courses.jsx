import { coursesData } from "../../constants/index";
import Course from "./Course";
import CourseHeader from "./CourseHeader";

const Courses = () => {
  return (
    <div className="min-h-screen bg-base-200 py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <CourseHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
          {coursesData?.map((course) => (
            <Course
              key={course.id}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              price={course.price}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
