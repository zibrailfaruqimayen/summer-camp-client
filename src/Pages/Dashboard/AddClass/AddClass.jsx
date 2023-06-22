import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            name,
            price,
            instructor_name,
            email,
            available_seats,
            status,
            booked_students,
          } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            available_seats: parseFloat(available_seats),
            booked_students: parseFloat(booked_students),
            instructor_name,
            email,
            status,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/classes", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | Add Class</title>
      </Helmet>
      <h2 className="text-3xl text-center mb-10 font-bold">Add a New class</h2>
      <div className="">
        <form className="px-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control  mb-6">
            <label className="label">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex w-full space-x-5 mb-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Instructor name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                readOnly
                placeholder="Instructor name"
                {...register("instructor_name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="text"
                defaultValue={user.email}
                readOnly
                placeholder="Email"
                {...register("email", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex w-full space-x-5 mb-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="number"
                placeholder="Available Seats"
                {...register("available_seats", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control w-full max-w-xs mb-8">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={"pending"}
              {...register("status", { required: true })}
              className="input input-bordered hidden"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={"0"}
              {...register("booked_students", { required: true })}
              className="input input-bordered hidden"
            />
          </div>
          <button className="btn border-0 bg-green-300 hover:bg-green-500">
            <input type="submit" value="Add Item" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
