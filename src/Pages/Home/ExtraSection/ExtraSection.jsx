import { motion } from "framer-motion";
import dance from "../../../assets/images/ExSection/dance.jpg";
import painting from "../../../assets/images/ExSection/painting.jpg";
import sports from "../../../assets/images/ExSection/sports.jpg";

const ExtraSection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-center text-3xl font-bold mb-8">More Classes</h2>
      <div className="grid grid-cols-3 items-center justify-items-center">
        <motion.div whileHover={{ scale: 1.3 }}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={sports} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Sports</h2>
              <p>
                First of all, Sport refers to an activity involving physical
                activity involving physical and skill.
              </p>
              <div className="card-actions">
                <button className="btn text-white bg-sky-500">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={painting} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Painting</h2>
              <p>
                Painting: What is Painting Definition-Eden Gallery Painting is
                the act or process of using paint.
              </p>
              <div className="card-actions">
                <button className="btn text-white bg-sky-500">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={dance} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dance</h2>
              <p>
                dance, the movement of the body in a rhythmic way, usually to
                music and within a given space.
              </p>
              <div className="card-actions">
                <button className="btn text-white bg-sky-500">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExtraSection;
