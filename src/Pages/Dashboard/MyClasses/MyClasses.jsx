import { Helmet } from "react-helmet-async";
import useMyClasses from "../../../Hooks/useMyClasses";

const MyClasses = () => {
  const [myclasses] = useMyClasses();
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | All Class</title>
      </Helmet>
      <h2>All Your Classes {myclasses.length}</h2>
      <div className="overflow-x-auto ">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Status</th>
              <th className="text-center">Total Enrolled</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myclasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td className="text-center">{item.booked_students}</td>
                <td>
                  <button className="btn bg-sky-300 text-white btn-xs">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
