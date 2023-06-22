import { Helmet } from "react-helmet-async";
import useFeedback from "../../../Hooks/useFeedback";

const Feedback = () => {
  const [feedback] = useFeedback();
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Feedback</title>
      </Helmet>
      <h2>Your Feedback from Admin {feedback.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>feedback message</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.feedback}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
