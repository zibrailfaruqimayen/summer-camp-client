import { Link } from "react-router-dom";
import error from "../../assets/images/error/error.jpg";

const ErrorPage = () => {
  return (
    <div className=" ">
      <div className="flex justify-center ">
        <img className="w-[900px]" src={error} alt="" />
      </div>
      <div className="absolute left-96 bottom-32">
        <Link to="/">
          <button className="btn btn-wide bg-sky-400 text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
