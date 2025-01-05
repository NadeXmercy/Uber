import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.error("No token found!");
      navigate("/login");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch(error => {
        console.error("Logout error:", error);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;