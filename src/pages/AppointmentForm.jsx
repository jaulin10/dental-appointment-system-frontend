import { useState, useEffect } from "react";
import { createAppointment } from "../services/appointmentService";
import { getServices } from "../services/serviceService";
import { getDentists } from "../services/dentistService";
import { useNavigate } from "react-router-dom";
import "../AppointmentForm.css";

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
    <div className="appointment-form-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>📅 Schedule an Appointment</h2>

        <div className="form-group">
          <label>Service</label>
          <select
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Dentist</label>
          <select
            value={dentistId}
            onChange={(e) => setDentistId(e.target.value)}
            required
          >
            <option value="">Select a dentist</option>
            {dentists.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
