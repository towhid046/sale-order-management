import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import swal from "sweetalert";
import { useContext } from "react";
import { UserContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser, handleAddOrderToggle, isToggle } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      swal("Log out", "You have log Out successfully!!", "success");
      navigate("/");
    } catch (error) {
      swal("Error", `${error.message}`, "error");
    }
  };

  console.log(isToggle);

  return (
    <nav className="bg-gray-800 py-5 w-full z-50 top-0">
      <div className="container relative px-4 mx-auto flex justify-between items-center">
        {/* Left side: Toggle Button and Website Name */}
        <div className="flex items-center italic">
          <Link
            to={"/"}
            className="text-gray-300 cursor-pointer font-bold text-3xl"
          >
            Sale<span className="text-green-500">Order</span>
          </Link>
        </div>

        {/* Middle: Menu Items */}
        <div className="menu flex flex-grow justify-center list-none gap-6 text-white font-medium">
          <li className={`transition duration-300 `}>
            <NavLink to={"/active-order"}>Active Order</NavLink>
          </li>
          <li className={`transition duration-300 `}>
            <NavLink to={"/completed-order"}>Completed Order</NavLink>
          </li>
        </div>

        {/* Right side: User Image */}
        <div className="flex gap-4 items-center">
          <>
            {!user ? (
              <>
                <div onClick={handleLogOutUser}>
                  <button className={"bg-gray-800"}>Log Out</button>
                </div>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                  data-tooltip-place="bottom"
                  src={user?.photoURL}
                  alt="User"
                />
              </>
            ) : (
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Add Sale Order"
                to={"/login"}
                onClick={handleAddOrderToggle}
                className={" border py-1.5 px-5 text-gray-200  font-semibold"}
              >
                + Sale Order
              </button>
            )}
          </>
        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </nav>
  );
};

export default Navbar;
