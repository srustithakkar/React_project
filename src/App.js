import { useState, useEffect } from "react";
import "./App.css";
import { ServiceCard } from "./components";
import ServiceTitle from "./components/ServiceTitle";
import TotalDetails from "./components/TotalDetails";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const mainServices = [];
  const total = [];
  const additionServices = [];

  data &&
    data.purchased_services &&
    data.purchased_services.map((service) => {
      const isService = service.purchased_office_template.purchased_office_services.find(
        (item) => item.service_selected
      );
      if (isService) {
        total.push({ name: isService.name, price: isService.price });
        mainServices.push(service);
      } else {
        additionServices.push(service);
      }
    });

  const renderSubServices = (service) =>
    service.purchased_office_template.purchased_office_services.map(
      (subService) => <ServiceCard service={subService} key={subService.id} />
    );

  return (
    <div className="App">
      <div className="container">
        Purchased Services
        {mainServices.map((service) => {
          return (
            <>
              <ServiceTitle name={service.name} />
              {renderSubServices(service)}
            </>
          );
        })}
      </div>

      <TotalDetails totalitems={total} />

      <div className="container">
        Additional Services
        {additionServices.map((service) => {
          return (
            <>
              <ServiceTitle name={service.name} />
              {renderSubServices(service)}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
