import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Erreur chargement services:", err));
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <img src="/logo.png" alt="Team Logo" className="logo" />
        <h1>Dental Appointment System</h1>
        <h2>Our Services</h2>
      </header>

      <section className="services-container">
        {services.length > 0 ? (
          services.map((service) => (
            <div className="service-card" key={service._id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-info">
                <span>
                  <strong>Time:</strong> {service.duration} min
                </span>
                <span>
                  <strong>Amount:</strong> ${service.price}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-services">There are no services available.</p>
        )}
      </section>
    </div>
  );
}
