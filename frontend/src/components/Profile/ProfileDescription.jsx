import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function ProfileDescription({ user2 }) {
  return (
    <div className="bg-white rounded-lg border shadow-lg my-4 p-8">
      <h3 className="font-bold text-xl mb-3">About This Freelancer</h3>
      <p className="text-sm font-semibold mb-3">
        {user2?.bio === null
          ? "This Freelancer Has no Description"
          : user2?.bio}
      </p>
      <h3 className="font-bold text-xl mb-3">Linked Account</h3>
      <ul className="flex space-x-2">
        {user2?.facebook === null ? (
          ""
        ) : (
          <li className="cursor-pointer hover:text-green-500 transition-all">
            <span>
              <FaFacebook size={22} />
            </span>
          </li>
        )}
        {user2?.instagram === null ? (
          ""
        ) : (
          <li className="cursor-pointer hover:text-green-500 transition-all">
            <span>
              <FaInstagram size={22} />
            </span>
          </li>
        )}
        {user2?.linkedin === null ? (
          ""
        ) : (
          <li className="cursor-pointer hover:text-green-500 transition-all">
            <span>
              <FaLinkedin size={22} />
            </span>
          </li>
        )}

        <li className="cursor-pointer hover:text-green-500 transition-all">
          <span>
            <FaWhatsapp size={22} />
          </span>
        </li>
      </ul>
    </div>
  );
}
export default ProfileDescription;
