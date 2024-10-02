import { TbBrandAstro } from "react-icons/tb";
import { GrLike } from "react-icons/gr";
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { PiHandshake } from "react-icons/pi";
const features = [
  {
    icone: <TbBrandAstro size={62} className="text-center mx-auto mb-3" />,
    title: "Get your work done quickly and easily",
    description: "Find the best professional freelancers",
  },
  {
    icone: <GrLike size={62} className="text-center mx-auto mb-3" />,
    title: "Hire the best freelancers",
    description:
      "Browse the profiles of freelancers, see their skills, work, and customer ratings, and choose the most suitable one",
  },
  {
    icone: (
      <RiExchangeDollarFill size={62} className="text-center mx-auto mb-3" />
    ),
    title: "Do your projects a set bit lower",
    description:
      "Determine the appropriate budget for your project and choose among the expert freelancers to work on achieving the required",
  },
  {
    icone: (
      <FaHandHoldingDollar size={62} className="text-center mx-auto mb-3" />
    ),
    title: "Pay comfortably and securely",
    description:
      "Pay the value of the required work through secure payment methods with full guarantee of your financial rights",
  },
  {
    icone: <RiTeamFill size={62} className="text-center mx-auto mb-3" />,
    title: "Cover your skill needs",
    description:
      "Hire experts in different fields to implement the projects you need",
  },
  {
    icone: <PiHandshake size={62} className="text-center mx-auto mb-3" />,
    title: "Guarantee your rights",
    description:
      "Fully preserve your rights, as an independent site plays the role of mediator between you and the freelancer",
  },
];
function Features() {
  return (
    <div className="px-64 my-8">
      <h2 className="text-center font-bold text-2xl">
        HOW A FREELANCER HELPS YOU GET YOUR BUSINESS DONE
      </h2>
      <div className="grid grid-cols-3">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
}

function Feature({ feature }) {
  return (
    <div className="text-center my-6">
      {feature.icone}
      <h3 className="font-bold text-xl mb-1">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}
export default Features;
