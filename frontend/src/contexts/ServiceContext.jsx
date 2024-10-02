import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ServiceContext = createContext();

function ServiceProvider({ children }) {
  const [AllServices, setAllServices] = useState([]);
  const [Service, setService] = useState([]);

  async function getAllServices() {
    try {
      const res = await axios.get(`http://localhost:4500/api/service`);
      if (res) {
        setAllServices(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getServiceFromHisId(id) {
    try {
      const res = await axios.get(`http://localhost:4500/api/service/${id}`);
      if (res) {
        setService(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteServiceFromHisId(id) {
    try {
      const res = await axios.delete(`http://localhost:4500/api/service/${id}`);
      if (res) {
        console.log("Service deleted successfully");
        getAllServices();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        AllServices,
        getAllServices,
        Service,
        getServiceFromHisId,
        deleteServiceFromHisId,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export { ServiceContext, ServiceProvider };
