// import { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedbackModal = ({ item, closeModal }) => {
  console.log(item);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (feedback) => {
    feedback = { ...feedback, ...item };

    axiosSecure.post("/feedback", feedback).then((data) => {
      console.log("after posting new menu item", data.data);
      if (data.data.insertedId) {
        reset();
        closeModal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Your Feedback</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Your Feedback"
            {...register("feedback", { required: true })}
          ></textarea>

          <input
            className="btn w-full bg-sky-300"
            type="submit"
            value="send feedback"
          />
        </div>
      </form>
      <button
        type="button"
        onClick={closeModal}
        className="btn btn-secondary mr-2"
      >
        Cancel
      </button>
    </div>
  );
};

export default FeedbackModal;
