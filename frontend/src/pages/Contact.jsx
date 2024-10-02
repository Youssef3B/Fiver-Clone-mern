import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import Button from "../components/Button";

function Contact() {
  return (
    <div className="px-64 my-24">
      <h3 className="font-bold text-3xl">Contact Us</h3>
      <div className="grid grid-cols-3 gap-6  border rounded-lg shadow-md my-4">
        <div className="col-span-1 bg-green-500 px-8 py-12 rounded-l-lg">
          <h2 className="text-white font-bold text-2xl">Let s get in touch</h2>
          <p className="text-white my-2">
            We re open for any suggestion or just to have a chat
          </p>
          <div className="flex items-center space-x-3 my-6 text-white font-semibold">
            <span>
              <FiMapPin size={26} />
            </span>
            <p>
              <span>Adress: </span> West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
          <div className="flex items-center space-x-3 my-6 text-white font-semibold">
            <span>
              <FiPhone size={26} />
            </span>
            <p>
              <span>Adress: </span> West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
          <div className="flex items-center space-x-3 my-6 text-white font-semibold">
            <span>
              <LuMessageCircle size={26} />
            </span>
            <p>
              <span>Adress: </span> West 21th Street, Suite 721 New York NY
              10016
            </p>
          </div>
        </div>
        <div className="col-span-2 px-8 py-12 rounded-r-lg bg-white">
          <h3 className="font-bold text-3xl mb-3">Get in Touch</h3>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-none "
                  placeholder="John"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required=""
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Your Subject"
                required=""
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 "
                placeholder="Write your thoughts here..."
                defaultValue={""}
              />
            </div>
            <Button variant={"outlined"}>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
