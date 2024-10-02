import { Link } from "react-router-dom";
import Button from "../Button";
import Menu from "./Menu";
import Search from "./Search";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import toast from "react-hot-toast";

function Navbar() {
  const { isLogin, setIsLogin, user } = useContext(UserContext);
  const fullPath = String(user?.avatar);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");

  function handleLogout() {
    localStorage.removeItem("userId");
    setIsLogin(false); // Update context
    toast.success("You logged out");
  }

  return (
    <nav className="px-64 py-4 bg-white shadow-md flex justify-between">
      <div className="flex items-center space-x-12">
        <img className="w-56" src="../images/bricoolLogo.png" alt="" />
        <Menu />
      </div>
      <div className="flex items-center space-x-2">
        <Search />
        {isLogin ? (
          <Hello
            desiredPath={desiredPath}
            user={user}
            handleLogout={handleLogout}
          />
        ) : (
          <Login />
        )}
      </div>
    </nav>
  );
}

function Hello({ handleLogout, user, desiredPath }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex items-center space-x-4">
      <div>
        <button
          id="dropdownAvatarNameButton"
          onClick={toggleDropdown}
          className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-green-600  md:me-0 focus:ring-4 focus:ring-gray-100"
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-10 h-10 me-2 rounded-full object-cover object-center"
            src={`../${desiredPath}`}
            alt="user photo"
          />
          {user.firstName} {user.lastName}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownAvatarName"
          className={`z-10 absolute ${
            isDropdownOpen ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div className="font-medium ">
              {user.firstName} {user.lastName}
            </div>
            <div className="truncate">{user.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownAvatarNameButton"
          >
            <li>
              <Link to={`profile/${user._id}`}>
                <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </p>
              </Link>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Portfolio
              </p>
            </li>
            <Link to={"addService"}>
              <li>
                <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Add New Service
                </p>
              </li>
            </Link>

            <Link to={"listOfFavorite"}>
              <li>
                <p className="block px-4 py-2 hover:bg-gray-100">
                  My Favorite Services
                </p>
              </li>
            </Link>

            <Link to={"editAccount"}>
              <li>
                <p className="block px-4 py-2 hover:bg-gray-100">Settings</p>
              </li>
            </Link>
          </ul>
          <div className="py-2">
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sign out
            </p>
          </div>
        </div>
      </div>
      <Button onClick={handleLogout} variant={"outlined"}>
        Log Out
      </Button>
    </div>
  );
}

function Login() {
  return (
    <div className="flex space-x-3">
      <Link to={"login"}>
        <Button variant="outlined">Login</Button>
      </Link>
      <Link to={"register"}>
        <Button variant="filled">Register</Button>
      </Link>
    </div>
  );
}

export default Navbar;
