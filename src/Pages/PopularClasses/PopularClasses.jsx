import useClasses from "../../Hooks/useClasses";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const [classes] = useClasses();

  const classItem = classes.filter((item) => item.status === "approved");

  classItem.sort((a, b) => b.booked_students - a.booked_students);

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold">Our Classes</h2>
      </div>

      <div className="grid grid-cols-3 justify-items-center mb-10 space-y-6">
        {classItem.map((item) => (
          <motion.div key={item._id} whileHover={{ scale: 1.2 }}>
            <div className="card w-96 bg-base-100 p-3 shadow-xl">
              <figure>
                <img className="h-[250px]" src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Instructor: {item.instructor_name}</p>
                <p>Price: ${item.price}</p>
                <p>Enrolled: {item.booked_students || 0}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
