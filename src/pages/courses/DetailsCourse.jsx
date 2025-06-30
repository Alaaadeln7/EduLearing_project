import { useParams } from "react-router-dom";
import { useCoursesStore } from "../../stores/useCoursesStore";
import { useEffect } from "react";
import {
  BookOpen,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Users,
  Calendar,
  BarChart2,
  CheckCircle,
  Video,
  File,
  Loader,
} from "lucide-react";
export default function DetailsCourse() {
  const { id } = useParams();
  const { course, getSingleCourse, loading } = useCoursesStore(
    (state) => state
  );
  useEffect(() => {
    getSingleCourse(id);
  }, [getSingleCourse, id]);
  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-lg">Course not found</div>
      </div>
    );
  }
  console.log(course);
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={course.thumbnailUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-orange-500 mr-2" />
                  <span>${course.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" />
                  <span>{course.duration} hours</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-orange-500 mr-2" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                  <span>{course.category}</span>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Course Details Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-orange-500 mr-2" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 text-orange-500 mr-2" />
                Course Content
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((week) => (
                  <div
                    key={week}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 px-4 py-3 font-medium flex justify-between items-center">
                      <span>Week {week}: Introduction to Topic</span>
                      <span className="text-sm text-gray-500">4 lessons</span>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {[1, 2, 3, 4].map((lesson) => (
                        <div
                          key={lesson}
                          className="px-4 py-3 flex items-center"
                        >
                          <Video className="w-5 h-5 text-gray-400 mr-3" />
                          <span>Lesson {lesson}: Basic Concepts</span>
                          <span className="ml-auto text-sm text-gray-500">
                            15 min
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            {course.prerequisites && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart2 className="w-6 h-6 text-orange-500 mr-2" />
                  Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {course.prerequisites.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Features */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold mb-4">This course includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-orange-500 mr-2" />
                  <span>10 hours on-demand video</span>
                </li>
                <li className="flex items-center">
                  <File className="w-5 h-5 text-orange-500 mr-2" />
                  <span>5 downloadable resources</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-orange-500 mr-2" />
                  <span>Access on mobile and TV</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold mb-4">Instructor</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600 text-sm">Senior Developer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                With over 10 years of experience in web development, John has
                taught thousands of students worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
