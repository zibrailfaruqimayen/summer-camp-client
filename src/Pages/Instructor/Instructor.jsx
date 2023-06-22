import useInstructor from "../../Hooks/useInstructor";

const Instructor = () => {
  const [instructor] = useInstructor();

  const Instructors = instructor.filter((item) => item.role === "instructors");

  return (
    <div className="pt-20 mb-10">
      <h2 className="text-3xl mt-10 font-bold text-center">
        all Instructor {Instructors.length}
      </h2>
      <div className="grid grid-cols-3 justify-items-center space-y-10">
        {Instructors.map((item) => (
          <div
            key={item._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img className="h-[250px]" src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {item.name}</h2>
              <p>Email: {item.email}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-sky-500 hover:bg-sky-700 text-white">
                  See Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
