// src/pages/MyProfile.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Chargement du profil...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mon Profil</h2>
      <p>
        <strong>Nom:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {/* Ajoute d'autres champs selon ton modèle utilisateur */}
    </div>
  );
}
