import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Appointments from "./pages/Appointments";
import AppointmentForm from "./pages/AppointmentForm";
import SignUp from "./pages/SignUp";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
