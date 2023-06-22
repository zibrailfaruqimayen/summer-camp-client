import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../Hooks/useSelect";

const ClassItem = ({ item }) => {
  const { name, image, instructor_name, available_seats, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useSelect();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (item) => {
    console.log(item);
    if (user && user.email) {
      const selectclass = {
        classId: _id,
        name,
        image,
        instructor_name,
        price,
        email: user.email,
      };
      fetch("https://musical-summer-camp-server.vercel.app/selectclass", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(selectclass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class selected",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Please login to enrolled",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login Now",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login", { state: { from: location } });
              }
            });
          }
        });
    }
  };

  const backgroundColorClass =
    available_seats === 0 ? "bg-red-500" : "bg-base-100";
  const isButtonDisabled = available_seats === 0;
  return (
    <div>
      <div>
        <div
          className={`card card-compact w-96 p-3 shadow-xl ${backgroundColorClass}`}
        >
          <figure>
            <img className="w-full h-[250px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Class Name: {name}</h2>
            <p>Instructor: {instructor_name}</p>
            <p>Available Seats: {available_seats}</p>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleSelect(item)}
                disabled={isButtonDisabled}
                className="btn border-0 text-white bg-sky-500 hover:bg-sky-700"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
