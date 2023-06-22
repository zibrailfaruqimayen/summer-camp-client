import { Helmet } from "react-helmet-async";
import useSelect from "../../../Hooks/useSelect";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AddSelect = () => {
  const [selectclass, refetch] = useSelect();
  console.log(selectclass);
  const total = selectclass.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://musical-summer-camp-server.vercel.app/selectclass/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your Class has been deleted.",
                "successfully"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Select | Musical Summer Camp</title>
      </Helmet>
      <div className="flex justify-between">
        <h2 className="text-2xl">My Selected Classes {selectclass.length}</h2>
        <h2 className="text-2xl">Total Price: ${total}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th></th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Instructor</th>
                <th>To Pay</th>
                <th>Delete Class</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectclass.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.instructor_name}</td>
                  <th>
                    <Link to="/dashboard/payment" state={item}>
                      <button className="btn bg-green-300 hover:bg-green-600">
                        Pay
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn  text-white bg-red-500 hover:bg-red-900 "
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddSelect;
