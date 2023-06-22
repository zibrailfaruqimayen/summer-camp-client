import { Helmet } from "react-helmet-async";
import useClasses from "../../Hooks/useClasses";
import ClassItem from "./ClassItem";

const Classes = () => {
  const [classes] = useClasses();

  const classItem = classes.filter((item) => item.status === "approved");
  return (
    <div className="">
      <Helmet>
        <title>Classes | Musical Summer Camp</title>
      </Helmet>

      <div className="pt-32 mb-10 space-y-10 grid grid-cols-3">
        {classItem.map((item) => (
          <ClassItem key={item._id} item={item}></ClassItem>
        ))}
      </div>
    </div>
  );
};

export default Classes;
