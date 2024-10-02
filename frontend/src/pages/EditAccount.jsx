import { Avatar } from "@files-ui/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

function EditAccount() {
  const { user, GetUserFromHisId } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [category, setCategory] = useState("");
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPhoneNumber(user.phoneNumber || "");
      setCity(user.city || "");
      setEmail(user.email || "");
      // setPassword(user.password || "");
      setBio(user.bio || "");
      setFacebook(user.facebook || "");
      setInstagram(user.instagram || "");
      setLinkedin(user.linkedin || "");
      setImageSource(user.avatar || ""); // Set the image source directly from the user object
      setCategory(user.category || "");
    }
  }, [user]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }

    const newData = new FormData();
    newData.append("firstName", firstName);
    newData.append("lastName", lastName);
    newData.append("phoneNumber", phoneNumber);
    newData.append("city", city);
    newData.append("email", email);
    if (password) {
      newData.append("password", password);
    }
    newData.append("bio", bio);
    newData.append("facebook", facebook);
    newData.append("instagram", instagram);
    newData.append("linkedin", linkedin);
    newData.append("category", category);
    if (typeof imageSource !== "string") {
      newData.append("avatar", imageSource);
    }

    try {
      const result = await axios.put(
        `http://localhost:4500/api/user/editUserById/${user._id}`,
        newData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (result) {
        toast.success("User Updated successfully");
        GetUserFromHisId(user._id);
      }
    } catch (error) {
      toast.error("Error updating user");
      console.log(error);
    }
  }

  const fullPath = String(imageSource);

  const pathParts = fullPath.split("\\");
  const desiredPath = pathParts.slice(-2).join("\\");
  console.log(desiredPath);

  return (
    <div className="px-64 my-24">
      <div className="bg-white border border-zinc-300 shadow-md rounded-lg p-10">
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mx-auto text-center flex justify-center my-4">
            <Avatar
              src={
                typeof imageSource === "string"
                  ? desiredPath // Assuming the image source is the path to the image on the server
                  : URL.createObjectURL(imageSource)
              }
              alt="Avatar"
              variant="circle"
            />
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setImageSource(file);
              }}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required=""
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required=""
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required=""
                defaultValue={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              value={password} // Change from defaultValue to value
              onChange={(e) => setPassword(e.target.value)}
            />

            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              value={passwordConfirmation} // Change from defaultValue to value
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />

            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              id="bio"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
              placeholder="Your Bio"
              defaultValue={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Choose Your Category</option>
              <option value="Business and advisory services">
                Business and advisory services
              </option>
              <option value="Programming, developing websites and applications">
                Programming, developing websites and applications
              </option>
              <option value="Design, video and audio">
                Design, video and audio
              </option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Writing">Writing</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="facebook"
              id="facebook"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              defaultValue={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <label
              htmlFor="facebook"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Facebook
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="instagram"
              id="instagram"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              defaultValue={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <label
              htmlFor="instagram"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Instagram
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              defaultValue={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <label
              htmlFor="linkedin"
              className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Linkedin
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Edit Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditAccount;
