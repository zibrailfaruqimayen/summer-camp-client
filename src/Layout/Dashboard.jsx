import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingBasket,
  FaCalendarAlt,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuBoxed } from "react-icons/cg";
import { FcFeedback } from "react-icons/fc";
import useAdmin from "../Hooks/useAdmin";
import useInstructors from "../Hooks/useInstructors";

const Dashboard = () => {
  // const isAdmin = true;
  // const isInstructors = true;
  const [isAdmin] = useAdmin();
  const [isInstructors] = useInstructors();

  return (
    <div className="drawer lg:drawer-open  md:pt-[76px]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Show Sidebar
        </label>
      </div>
      <div className="drawer-side rounded-lg bg-sky-100">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclass">
                  <TfiMenuAlt /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <FaUsers /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructors ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/addclass">
                  <FaShoppingBasket />
                  Add a Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <FaCalendarAlt />
                  My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/feedback">
                  <FcFeedback />
                  Your Feedback
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/AddSelect">
                  <FaShoppingBasket /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolled">
                  <FaCalendarAlt /> My Enrolled Classes
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet /> Payment
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <CgMenuBoxed /> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
