import { MdOutlineDesignServices } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { TbWriting } from "react-icons/tb";
import { FaMusic } from "react-icons/fa";

const fields = [
  {
    icone: <MdOutlineDesignServices size={23} />,
    title: "Graphics & Design",
  },
  {
    icone: <FaBullhorn size={23} />,
    title: "Digital Marketing",
  },
  {
    icone: <FaVideo size={23} />,
    title: "Video & Animation",
  },
  {
    icone: <MdOutlinePhotoCamera size={23} />,
    title: "Photography",
  },
  {
    icone: <FaLaptopCode size={23} />,
    title: "Programming & Tech",
  },
  {
    icone: <IoIosBusiness size={23} />,
    title: "Business",
  },
  {
    icone: <TbWriting size={23} />,
    title: "Writing",
  },
  {
    icone: <FaMusic size={23} />,
    title: "Music & Audio",
  },
];
function Fields() {
  return (
    <div className="px-64 py-8 bg-green-100">
      <h2 className="text-center font-bold text-2xl">
        Find freelancers in all fields
      </h2>
      <div className="grid grid-cols-4 gap-8 my-8">
        {fields.map((field, index) => (
          <Field key={index} field={field} />
        ))}
      </div>
    </div>
  );
}

function Field({ field }) {
  return (
    <div className="text-center flex flex-col">
      <span className="mx-auto mb-3">{field.icone}</span>
      <p className="font-bold">{field.title}</p>
    </div>
  );
}
export default Fields;
