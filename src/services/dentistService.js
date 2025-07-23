// src/services/dentistService.js
import api from "./api";

export const getDentists = () => api.get("/dentists");
export const getDentist = (id) => api.get(`/dentists/${id}`);
export const createDentist = (data) => api.post("/dentists", data);
export const updateDentist = (id, data) => api.put(`/dentists/${id}`, data);
export const deleteDentist = (id) => api.delete(`/dentists/${id}`);
