import { Helmet } from "react-helmet-async";
import useEnrolled from "../../../Hooks/useEnrolled";

const MyEnrolled = () => {
  const [enrolled] = useEnrolled();

  return (
    <div>
      <Helmet>
        <title>My Select | My Enrolled</title>
      </Helmet>
      <h2>My Enrolled Classes {enrolled.length}</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>

                <th>Class Name</th>
                <th>Price</th>
                <th>Instructor</th>
                <th>Status</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {enrolled.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.instructor_name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolled;
