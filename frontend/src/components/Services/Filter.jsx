import { useState } from "react";
import Button from "../Button";

function Filter({ setSelectedCategory, setSelectedCity }) {
  const [checkedCheckbox, setCheckedCheckbox] = useState("");

  const handleCheckboxChange = (event) => {
    const category = event.target.id;
    setCheckedCheckbox(category);
    setSelectedCategory(category === "All-categories" ? "" : category);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="col-span-1">
      <form action="">
        <h4 className="my-4 font-semibold">Filter By</h4>
        <div className=" w-full bg-black"></div>

        <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="All-categories"
                type="checkbox"
                checked={checkedCheckbox === "All-categories"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="All-categories"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                All categories
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Business and advisory services"
                type="checkbox"
                checked={checkedCheckbox === "Business and advisory services"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Business and advisory services"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Business and advisory services
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Programming, developing websites and applications"
                type="checkbox"
                checked={
                  checkedCheckbox ===
                  "Programming, developing websites and applications"
                }
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Programming, developing websites and applications"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Programming, developing websites and applications
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Design, video and audio"
                type="checkbox"
                checked={checkedCheckbox === "Design, video and audio"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Design, video and audio"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Design, video and audio
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Sales & Marketing"
                type="checkbox"
                checked={checkedCheckbox === "Sales & Marketing"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Sales & Marketing"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Sales & Marketing
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Writing"
                type="checkbox"
                checked={checkedCheckbox === "Writing"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Writing"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Writing
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg ">
            <div className="flex items-center ps-3">
              <input
                id="Support"
                type="checkbox"
                checked={checkedCheckbox === "Support"}
                onChange={handleCheckboxChange}
                className="w-4 h-4 t bg-gray-100 border-gray-300 rounded "
              />

              <label
                htmlFor="Support"
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Support
              </label>
            </div>
          </li>
        </ul>

        <h4 className="my-4 font-semibold">City</h4>
        <div className="w-full bg-black"></div>
        <select
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring focus:ring-opacity-40"
          onChange={handleCityChange}
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
        <div className="my-4">
          <Button variant={"outlined"}>Filter</Button>
        </div>
      </form>
    </div>
  );
}
export default Filter;
