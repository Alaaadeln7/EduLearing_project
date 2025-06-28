const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Lead Instructor",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Johnson",
      role: "Content Creator",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
