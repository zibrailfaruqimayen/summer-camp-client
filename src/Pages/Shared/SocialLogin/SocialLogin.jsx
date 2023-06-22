import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        image: loggedInUser.photoURL,
      };
      fetch("https://musical-summer-camp-server.vercel.app/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">or</div>
      <div className="text-center my-6 space-x-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-wide border-0 bg-base-200 text-gray-500 hover:text-white btn-outline "
        >
          <FcGoogle className="text-4xl" />
          <span className="  ">login with google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
