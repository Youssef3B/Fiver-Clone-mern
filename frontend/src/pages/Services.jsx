import Filter from "../components/Services/Filter";
import Search from "../components/Navbar/Search";
import ServiceCard from "../components/Services/ServiceCard";
import { ServiceContext } from "../contexts/ServiceContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Services() {
  const { AllServices, deleteServiceFromHisId } = useContext(ServiceContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const servicesPerPage = 6;

  // Filtered services based on search query, category, and city
  const filteredServices = AllServices.filter((service) => {
    const matchesSearchQuery = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? service?.user?.category === selectedCategory
      : true;
    const matchesCity = selectedCity
      ? service.user.city === selectedCity
      : true;
    return matchesSearchQuery && matchesCategory && matchesCity;
  });

  // Logic to calculate index of the first and last service on the current page
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  // Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Update current page to 1 whenever search query, category, or city changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedCity]);

  return (
    <div className="px-64 my-10 bg-white">
      <h2 className="font-bold text-3xl">Top Bricol Freelancers</h2>
      <div className="grid grid-cols-3 gap-8">
        <Filter
          setSelectedCategory={setSelectedCategory}
          setSelectedCity={setSelectedCity}
        />
        <div className="col-span-2 px-6">
          <Search setSearchQuery={setSearchQuery} />
          {currentServices.map((service, index) => (
            <Link to={`/servicesDetail/${service._id}`} key={index}>
              <ServiceCard
                deleteServiceFromHisId={deleteServiceFromHisId}
                service={service}
              />
            </Link>
          ))}
          <div className="mx-auto">
            <nav aria-label="Page navigation example" className="mx-auto flex">
              <ul className="flex mx-auto">
                <li>
                  <p
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center cursor-pointer justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Previous
                  </p>
                </li>
                {Array.from(
                  {
                    length: Math.ceil(
                      filteredServices.length / servicesPerPage
                    ),
                  },
                  (_, i) => (
                    <li key={i}>
                      <p
                        onClick={() => paginate(i + 1)}
                        className={`flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                          currentPage === i + 1
                            ? "text-green-600 bg-green-50"
                            : "hover:bg-gray-100 hover:text-gray-700 "
                        }`}
                      >
                        {i + 1}
                      </p>
                    </li>
                  )
                )}
                <li>
                  <p
                    onClick={() => paginate(currentPage + 1)}
                    disabled={
                      currentPage ===
                      Math.ceil(filteredServices.length / servicesPerPage)
                    }
                    className="flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                  >
                    Next
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
