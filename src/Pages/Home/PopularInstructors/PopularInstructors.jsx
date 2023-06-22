import { motion } from "framer-motion";
import useInstructor from "../../../Hooks/useInstructor";

const PopularInstructors = () => {
  const [instructor] = useInstructor();
  const Instructors = instructor.filter((item) => item.role === "instructors");

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-8">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-3 justify-items-center mb-10 space-y-6">
        {Instructors.map((item) => (
          <motion.div key={item._id} whileHover={{ scale: 1.2 }}>
            <div className="card w-96 bg-base-100 p-3 shadow-xl">
              <figure>
                <img className="h-[250px]" src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
