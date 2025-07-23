import { useEffect, useState } from "react";
//import axios from "axios";
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
    <div className="home">
      <header style={{ textAlign: "center", margin: "2rem" }}>
        <img src="/logo.png" alt="Team Logo" style={{ width: 100 }} />
        <h1>Dental Appointment System</h1>
        <h2>Our services</h2>
      </header>

      <section
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {services.length > 0 ? (
          services.map((service) => (
            <div
              key={service._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                margin: "1rem",
                width: "250px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>
                <strong>Time:</strong> {service.duration} min
              </p>
              <p>
                <strong>Amount:</strong> ${service.price}
              </p>
            </div>
          ))
        ) : (
          <p>There are no services available.</p>
        )}
      </section>
    </div>
  );
}
