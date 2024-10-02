import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const { isLogin, setIsLogin } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const user = { email, password };
    try {
      const result = await axios.post(
        `http://localhost:4500/api/auth/login`,
        user
      );
      toast.success("User logged in successfully");
      // Extract JWT token from the response
      const token = result.data.data;

      // Decode the JWT token to get the user ID
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload._id;

      // Store the user ID in local storage
      localStorage.setItem("userId", userId);
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="px-64 py-24">
      <div className="grid grid-cols-7 h-[60vh] bg-white shadow-lg border rounded-lg">
        <div className="col-span-3 bg-[url('./images/man-login.jpeg')] bg-cover bg-center rounded-l-lg"></div>
        <div className="col-span-4 py-10 px-8">
          <h3 className="text-center font-bold text-4xl text-green-500">
            Welcome Back To Bricol
          </h3>
          <img
            className="h-12 mx-auto my-6"
            src="./images/bricoolLogo.png"
            alt=""
          />
          <form onSubmit={handleLogin} className="">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button variant={"outlined"}>Login</Button>
          </form>
          <p className="my-4 text-sm font-semibold">
            You Dont Have An Account?{" "}
            <Link to={"/register"}>
              <span className="font-bold hover:text-green-500 transition-all">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
