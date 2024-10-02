import { useContext, useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileDescription from "../components/Profile/ProfileDescription";
import ServiceCard from "../components/Services/ServiceCard";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";

function Profile() {
  const { user2, GetUserFromHisId } = useContext(UserContext);
  const { AllServices } = useContext(ServiceContext);
  const [FilterServices, setFilterService] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    GetUserFromHisId(id);
  }, []);
  useEffect(() => {
    if (AllServices) {
      const filtered = AllServices.filter(
        (service) => service?.user?._id === id
      );
      setFilterService(filtered);
    }
  }, [AllServices, id]);
  console.log(FilterServices);
  return (
    <div className="px-64 my-28">
      <div className="grid grid-cols-3 gap-16 bg-white">
        <div className="col-span-1">
          <ProfileCard user2={user2} />
          <ProfileDescription user2={user2} />
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-bold">
            {user2.firstName} {user2.lastName}
          </h2>
          {FilterServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
