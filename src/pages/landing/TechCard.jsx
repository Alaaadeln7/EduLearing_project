export default function TechCard({
  image,
  title,
  duration,
  level,
  author,
  description,
  index,
}) {
  return (
    <div key={index} className="card bg-base-100 rounded-lg shadow-md p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{duration}</span>
          <span>{level}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{author}</p>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
          {description?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <button className="btn btn-sm btn-outline w-full">View Details</button>
      </div>
    </div>
  );
}
