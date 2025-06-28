const Course = ({ title, description, instructor, price, image }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-700 font-medium mt-2">
          Instructor: {instructor}
        </p>
        <p className="text-orange-500 font-bold mt-2">${price}</p>
        <button className="btn btn-orange mt-4 w-full">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
