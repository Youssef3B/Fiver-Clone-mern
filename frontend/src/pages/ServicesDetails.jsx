import { useParams } from "react-router-dom";
import ProfileCard from "../components/Profile/ProfileCard";
import AboutSeller from "../components/Services/AboutSeller";
import Comments from "../components/Services/Comments";
import HeaderServiceDetails from "../components/Services/HeaderServiceDetails";
import ServiceDescription from "../components/Services/ServiceDescription";
import SlidesService from "../components/Services/SlidesService";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

function ServicesDetails() {
  const { id } = useParams();
  const { getServiceFromHisId, Service } = useContext(ServiceContext);

  useEffect(() => {
    getServiceFromHisId(id);
  }, []);

  return (
    <div className="px-64 my-24">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <HeaderServiceDetails Service={Service} />
          <SlidesService Service={Service} />
          <ServiceDescription Service={Service} />
          <AboutSeller Service={Service} />
          <Comments />
        </div>
        <div className="col-span-1">{/* <ProfileCard /> */}</div>
      </div>
    </div>
  );
}
export default ServicesDetails;
