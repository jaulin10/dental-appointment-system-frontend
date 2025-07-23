// src/pages/AppointmentForm.jsx
import { useState, useEffect } from "react";
import { createAppointment } from "../services/appointmentService";
import { getServices } from "../services/serviceService";
import { getDentists } from "../services/dentistService";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
  const [serviceId, setServiceId] = useState("");
  const [dentistId, setDentistId] = useState("");
  const [date, setDate] = useState("");
  const [services, setServices] = useState([]);
  const [dentists, setDentists] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getServices().then((res) => setServices(res.data));
    getDentists().then((res) => setDentists(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment({ serviceId, dentistId, date });
      alert("Rendez-vous créé avec succès");
      navigate("/appointments");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la création");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Prendre un rendez-vous</h2>

      <label>Service</label>
      <select
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        required
      >
        <option value="">Choisir un service</option>
        {services.map((s) => (
          <option key={s._id} value={s._id}>
            {s.name}
          </option>
        ))}
      </select>

      <label>Dentiste</label>
      <select
        value={dentistId}
        onChange={(e) => setDentistId(e.target.value)}
        required
      >
        <option value="">Choisir un dentiste</option>
        {dentists.map((d) => (
          <option key={d._id} value={d._id}>
            {d.name}
          </option>
        ))}
      </select>

      <label>Date</label>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}
