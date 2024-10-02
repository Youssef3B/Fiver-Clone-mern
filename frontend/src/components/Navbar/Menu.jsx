import { TiHome } from "react-icons/ti";
import { MdDesignServices } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="flex space-x-10">
      <Link to={"/"}>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition-all">
          <span>
            <TiHome size={22} />
          </span>
          <span className="text-xl font-semibold">Home</span>
        </li>
      </Link>

      <Link to={"services"}>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition-all">
          <span>
            <MdDesignServices size={22} />
          </span>
          <span className="text-xl font-semibold">Services</span>
        </li>
      </Link>
      <Link to={"blog"}>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition-all">
          <span>
            <FaBloggerB size={22} />
          </span>
          <span className="text-xl font-semibold">Blog</span>
        </li>
      </Link>

      <Link to={"contact"}>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition-all">
          <span>
            <RiContactsFill size={22} />
          </span>
          <span className="text-xl font-semibold">Contact</span>
        </li>
      </Link>
    </ul>
  );
}
export default Menu;
