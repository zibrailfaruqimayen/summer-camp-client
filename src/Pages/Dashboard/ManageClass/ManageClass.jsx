import Swal from "sweetalert2";
import useClasses from "../../../Hooks/useClasses";
import { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const ManageClass = () => {
  const [classes, refetch] = useClasses();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleApprove = (item) => {
    fetch(`https://musical-summer-camp-server.vercel.app/classes/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} Successfully Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (item) => {
    fetch(
      `https://musical-summer-camp-server.vercel.app/classes/denied/${item._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${item.name} Class Denied `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const closeModal = () => {
    setShowEditModal(false);
  };
  const handleEditClick = () => {
    setShowEditModal(true);
  };
  const handleFeedback = (data) => {
    // fetch(`https://toy-store-server-theta.vercel.app/updateToy/${data?._id}`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    // .then((res) => res.json())
    // .then((result) => {
    //   console.log(result);
    //   if (result.modifiedCount > 0) {
    //     Swal.fire({
    //       title: "Success",
    //       text: "Toy Updated Successfully",
    //       icon: "success",
    //       confirmButtonText: "Cool",
    //     });
    //     setControl(!control);
    //   }
    // });
    closeModal();
    console.log(data);
  };

  return (
    <div className="w-full ">
      <h2>all classes {classes.length}</h2>
      <div className="overflow-x-auto  rounded-xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-sky-300 font-bold text-black ">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
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
                <td>{item.instructor_name}</td>
                <td>{item.email}</td>
                <td className="text-center">{item.available_seats}</td>
                <td className="text-center">{item.price}</td>
                <td
                  className={`${
                    item.status === "approved"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.status}
                </td>
                <td className="">
                  {/* approve button */}
                  {item.status === "approved" ? (
                    <button disabled className="btn bg-green-300 btn-xs">
                      Approve
                    </button>
                  ) : item.status === "denied" ? (
                    <button disabled className="btn bg-green-300 btn-xs">
                      Approve
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApprove(item)}
                      className="btn bg-green-300 btn-xs"
                    >
                      Approve
                    </button>
                  )}
                  {/* deny button */}
                  {item.status === "denied" ? (
                    <>
                      <button disabled className="btn bg-red-300 mx-1 btn-xs">
                        Deny
                      </button>
                    </>
                  ) : item.status === "approved" ? (
                    <button disabled className="btn bg-red-300 mx-1 btn-xs">
                      Deny
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDeny(item)}
                        className="btn bg-red-300 mx-1 btn-xs"
                      >
                        Deny
                      </button>
                    </>
                  )}
                  {/* feedback button */}
                  {item.status === "denied" ? (
                    <button
                      onClick={handleEditClick}
                      className="btn bg-sky-700 text-white btn-xs"
                    >
                      send feedback
                    </button>
                  ) : (
                    <button
                      disabled
                      className="btn bg-sky-700 text-white btn-xs"
                    >
                      send feedback
                    </button>
                  )}
                  {showEditModal && (
                    <div className="fixed inset-0 z-10 flex  items-center justify-center">
                      <div className=" inset-0  opacity-10 bg-slate-200 "></div>
                      <div className="bg-white w-1/2 p-4">
                        <h2 className="text-xl font-bold mb-4">
                          Send a Feedback to Instructor
                        </h2>
                        {/* Add your edit form here */}
                        <FeedbackModal
                          item={item}
                          handleFeedback={handleFeedback}
                          closeModal={closeModal}
                        />
                        {/* <UpdateToy
                myToy={myToy}
                handleUpdateToy={handleUpdateToy}
                closeModal={closeModal}
              /> */}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
