import { Link } from "react-router-dom";
import logo from "../../../../public/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import useAdmin from "../../../Hooks/useAdmin";
// import useInstructors from "../../../Hooks/useInstructor";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin] = useAdmin();
  // const [isInstructors] = useInstructors();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {/* {isAdmin ? (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : isInstructors ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/AddSelect">Dashboard</Link>
        </li>
      )} */}
      {/* {isAdmin && (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      )} */}
      {/* {user && (
        <li>
          <Link to={isAdmin ? "/dashboard/adminhome" : "/dashboard/myclasses"}>
            Dashboard
          </Link>
        </li>
      )} */}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-2xl bg-sky-200 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 font-bold rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-[50px]" src={logo} alt="" /> Summer Music Camp
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-bold px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <label
                tabIndex={0}
                className="btn btn-ghost mr-3 btn-circle avatar"
              >
                <div className="w-10  rounded-full">
                  <img className="" src={user?.photoURL} />
                </div>
              </label>

              <button
                onClick={handleLogOut}
                className="btn border-0 bg-red-400 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn border-0 bg-sky-500 hover:bg-sky-700 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
