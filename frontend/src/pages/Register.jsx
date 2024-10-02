import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const newUser = { firstName, lastName, phoneNumber, email, city, password };
    try {
      const result = await axios.post(
        `http://localhost:4500/api/auth/register`,
        newUser
      );
      toast.success("Registration successful!");
      navigate("/login"); // Use navigate instead of redirect

      console.log(result);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="px-64 py-24">
      <div className="grid grid-cols-7 h-[100vh] bg-white shadow-lg border rounded-lg">
        <div className="col-span-4 py-10 px-8">
          <h3 className="text-center font-bold text-4xl text-green-500">
            Welcome Back To Bricol
          </h3>
          <img
            className="h-12 mx-auto my-6"
            src="./images/bricoolLogo.png"
            alt=""
          />
          <form onSubmit={handleRegister} className="">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                placeholder="Enter Your First Name"
                required=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                placeholder="Enter Your Last Name"
                required=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                placeholder="Enter Your Phone Number"
                required=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>
              <select
                id="countries"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
              >
                <option>Choose a city in Morocco</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Rabat">Rabat</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Fes">Fes</option>
                <option value="Tangier">Tangier</option>
                <option value="Agadir">Agadir</option>
                <option value="Meknes">Meknes</option>
                <option value="Oujda">Oujda</option>
                <option value="Kenitra">Kenitra</option>
                <option value="Tetouan">Tetouan</option>
                <option value="Safi">Safi</option>
                <option value="Taza">Taza</option>
                <option value="Settat">Settat</option>
                <option value="Taroudant">Taroudant</option>
                <option value="Berrechid">Berrechid</option>
                <option value="Beni Mellal">Beni Mellal</option>
                <option value="Khouribga">Khouribga</option>
                <option value="Midelt">Midelt</option>
                <option value="Nador">Nador</option>
                <option value="Larache">Larache</option>
                <option value="El Jadida">El Jadida</option>
                <option value="Ksar El Kebir">Ksar El Kebir</option>
                <option value="Mohammedia">Mohammedia</option>
                <option value="Errachidia">Errachidia</option>
                <option value="Ifrane">Ifrane</option>
                <option value="Sidi Kacem">Sidi Kacem</option>
                <option value="Guelmim">Guelmim</option>
                <option value="Ouarzazate">Ouarzazate</option>
                <option value="Al Hoceima">Al Hoceima</option>
                <option value="Sidi Slimane">Sidi Slimane</option>
                <option value="Azrou">Azrou</option>
                <option value="Tiznit">Tiznit</option>
                <option value="Dakhla">Dakhla</option>
                <option value="Essaouira">Essaouira</option>
                <option value="Youssoufia">Youssoufia</option>
                <option value="Taourirt">Taourirt</option>
                <option value="Martil">Martil</option>
                <option value="Berkane">Berkane</option>
                <option value="Asilah">Asilah</option>
                <option value="Temara">Temara</option>
                <option value="Boujdour">Boujdour</option>
                <option value="Azemmour">Azemmour</option>
                <option value="Salé">Salé</option>
              </select>
            </div>
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
            <Button variant={"outlined"}>Register</Button>
          </form>
          <p className="my-4 text-sm font-semibold">
            Do you already have an account?{" "}
            <Link to={"/login"}>
              <span className="font-bold hover:text-green-500 transition-all">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
        <div className="col-span-3 bg-[url('./images/girl-register.jpeg')] bg-cover bg-center rounded-r-lg"></div>
      </div>
    </div>
  );
}
export default Register;
