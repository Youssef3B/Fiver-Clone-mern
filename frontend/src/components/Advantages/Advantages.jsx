import { FaRegCircleCheck } from "react-icons/fa6";

function Advantages() {
  const items = [
    {
      title: "Quality services for all budgets",
      description:
        "Find high quality services at all price points. No hourly rates, but pricing based on projects.",
    },
    {
      title: "Choose the right freelancer",
      description:
        "Compare offers of freelancers, browse their files, reviews and works, negotiate with them via messages and choose the best one to implement your project.",
    },
    {
      title: "Receive the project",
      description:
        "The freelancer you choose will work on your project and follow up with you until you have the agreed work results and project delivery.",
    },
  ];
  return (
    <div className="px-64 bg-green-100 py-8">
      <h2 className="text-center font-bold text-2xl">
        DO YOU HAVE WORK YOU WANT TO GET DONE?
      </h2>
      <div className="grid grid-cols-2 gap-8 my-8">
        <div>
          {items.map((item, index) => (
            <Advantage key={index} item={item} />
          ))}
        </div>
        <div>
          <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function Advantage({ item }) {
  return (
    <div className="flex space-x-3 my-4 items-center">
      <span className="text-green-600">
        <FaRegCircleCheck size={22} />
      </span>

      <div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
export default Advantages;
