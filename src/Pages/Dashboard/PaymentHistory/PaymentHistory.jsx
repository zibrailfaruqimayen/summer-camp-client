import { Helmet } from "react-helmet-async";
import useEnrolled from "../../../Hooks/useEnrolled";

const PaymentHistory = () => {
  const [enrolled] = useEnrolled();
  return (
    <div>
      <h2 className="text-3xl">Your Payment History</h2>
      <Helmet>
        <title>My Select | Payment History</title>
      </Helmet>

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
                <th>Date</th>
                <th>transactionId</th>
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
                  <td>{item.date}</td>
                  <td>{item.transactionId}</td>
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

export default PaymentHistory;
