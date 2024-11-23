const OurTeam = () => {
  const teamData = [
    {
      id: 1,
      name: "Leroy Jenkins",
      role: "Visual Designer",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Web Developer",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      role: "UI/UX Designer",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 4,
      name: "Alice Johnson",
      role: "Project Manager",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 5,
      name: "Chris Evans",
      role: "Frontend Developer",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
    {
      id: 6,
      name: "Emma Watson",
      role: "Backend Developer",
      image: "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg",
    },
  ];

  return (
    <section className="py-6 bg-gray-100 text-gray-800">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Our Team
        </h1>
        <p className="max-w-2xl text-center text-gray-600">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-center m-8 text-center"
            >
              <img
                alt={member.name}
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src={member.image}
              />
              <p className="text-xl font-semibold leading-tight">
                {member.name}
              </p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default OurTeam;
