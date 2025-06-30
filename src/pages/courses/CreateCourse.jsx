import {
  BookOpen,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Image as ImageIcon,
  List,
  Upload,
  Users,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { categories, languages } from "../../constants/index";
import { useCoursesStore } from "../../stores/useCoursesStore";

const courseSchema = Yup.object().shape({
  title: Yup.string().required("Course title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .min(0, "Price can't be negative")
    .required("Price is required"),
  duration: Yup.number()
    .min(1, "Duration must be at least 1 hour")
    .required("Duration is required"),
  category: Yup.string().required("Category is required"),
  language: Yup.string().required("Language is required"),
  thumbnailUrl: Yup.string()
    .url("Must be a valid URL")
    .required("Thumbnail URL is required"),
  prerequisites: Yup.string(),
});

export default function CreateCourse() {
  const { createCourse } = useCoursesStore((state) => state);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 0,
      duration: 0,
      category: "",
      language: "English",
      thumbnailUrl: "",
      prerequisites: "",
    },
    validationSchema: courseSchema,
    onSubmit: async (values) => {
      console.log(values);
      await createCourse(values);
    },
  });

  const handleFileChange = (field) => {
    if (event.target.files) {
      formik.setFieldValue(field, event.currentTarget.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Create New Course
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Course Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Course Title
            </label>
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                className={`w-full p-3 border ${
                  formik.errors.title && formik.touched.title
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg pl-10 focus:outline-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                placeholder="Introduction to React"
              />
              <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
            {formik.errors.title && formik.touched.title && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.title}
              </div>
            )}
          </div>

          {/* Thumbnail URL */}
          <div>
            <label
              htmlFor="thumbnailUrl"
              className="block text-sm font-medium mb-1"
            >
              Thumbnail URL
            </label>
            <div className="relative">
              <input
                id="thumbnailUrl"
                name="thumbnailUrl"
                type="url"
                className={`w-full p-3 border ${
                  formik.errors.thumbnailUrl && formik.touched.thumbnailUrl
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg pl-10 focus:outline-none`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.thumbnailUrl}
                placeholder="https://example.com/image.jpg"
              />
              <ImageIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
            {formik.errors.thumbnailUrl && formik.touched.thumbnailUrl && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.thumbnailUrl}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className={`w-full p-3 border ${
                formik.errors.description && formik.touched.description
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:outline-none`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              placeholder="What will students learn in this course?"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-1">
                Price ($)
              </label>
              <div className="relative">
                <input
                  id="price"
                  name="price"
                  type="number"
                  className={`w-full p-3 border ${
                    formik.errors.price && formik.touched.price
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg pl-10 focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              {formik.errors.price && formik.touched.price && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.price}
                </div>
              )}
            </div>

            {/* Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium mb-1"
              >
                Duration (hours)
              </label>
              <div className="relative">
                <input
                  id="duration"
                  name="duration"
                  type="number"
                  className={`w-full p-3 border ${
                    formik.errors.duration && formik.touched.duration
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg pl-10 focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.duration}
                />
                <Clock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              {formik.errors.duration && formik.touched.duration && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.duration}
                </div>
              )}
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-1"
              >
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  className={`w-full p-3 border ${
                    formik.errors.category && formik.touched.category
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg appearance-none pr-10 focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                >
                  <option value="">Select a category</option>
                  {categories?.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <List className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              {formik.errors.category && formik.touched.category && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.category}
                </div>
              )}
            </div>

            {/* Language */}
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium mb-1"
              >
                Language
              </label>
              <div className="relative">
                <select
                  id="language"
                  name="language"
                  className={`w-full p-3 border ${
                    formik.errors.language && formik.touched.language
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg appearance-none pr-10 focus:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.language}
                >
                  {languages?.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <Globe className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              {formik.errors.language && formik.touched.language && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.language}
                </div>
              )}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <label
              htmlFor="prerequisites"
              className="block text-sm font-medium mb-1"
            >
              Prerequisites (optional)
            </label>
            <textarea
              id="prerequisites"
              name="prerequisites"
              rows={2}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.prerequisites}
              placeholder="What should students know before taking this course?"
            />
          </div>

          <div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Materials</h3>

              {/* Document Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Course Documents
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="documents"
                    name="documents"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                    className="hidden"
                    onChange={handleFileChange("documents")}
                  />
                  <label
                    htmlFor="documents"
                    className="flex items-center justify-between p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">
                        {formik.values.documents
                          ? formik.values.documents.name
                          : "Upload Documents"}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">PDF, DOC, PPT</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Course Videos
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="videos"
                    name="videos"
                    accept=".mp4,.mov,.avi,.mkv"
                    className="hidden"
                    onChange={handleFileChange("videos")}
                  />
                  <label
                    htmlFor="videos"
                    className="flex items-center justify-between p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">
                        {formik.values.videos
                          ? formik.values.videos.name
                          : "Upload Videos"}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">MP4, MOV, AVI</span>
                  </label>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Max file size: 100MB each
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn w-full bg-orange-500 hover:bg-orange-700 text-white cursor-pointer py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
