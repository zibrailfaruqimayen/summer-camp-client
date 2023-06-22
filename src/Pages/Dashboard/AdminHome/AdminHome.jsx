import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <h2 className="text-4xl font-bold mb-20">Welcome To Admin Dashboard</h2>
      <div className="flex items-center">
        <div>
          <img className="rounded-full w-[400px]" src={user.photoURL} alt="" />
        </div>
        <div className="ml-10">
          <h2 className="text-3xl font-semibold">{user.displayName}</h2>
          <h2>{user.email}</h2>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
