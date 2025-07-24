// src/pages/Appointments.jsx
import { useEffect, useState } from "react";
import {
  getAppointments,
  deleteAppointment,
} from "../services/appointmentService";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const res = await getAppointments();
    setAppointments(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce rendez-vous ?")) {
      await deleteAppointment(id);
      fetchAppointments();
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            {a.patientName} - {a.serviceName} à {a.date}
            <button
              onClick={() => handleDelete(a._id)}
              style={{ marginLeft: "1rem" }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
