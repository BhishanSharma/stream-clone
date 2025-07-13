import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/current-user", {
          withCredentials: true,
        });

        setProfilePic(res.data?.data?.avatar || "https://i.pravatar.cc/36"); // fallback
      } catch (err) {
        console.error("❌ Error fetching user profile:", err);
        setProfilePic("https://i.pravatar.cc/36");
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/v1/users/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("user"); // clear localStorage
      window.location.reload();        // full reload to reset auth
    } catch (err) {
      console.error("❌ Logout failed:", err);
      alert("Logout failed. Try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: "10%",
      }}
    >
      <h2
        style={{ margin: '0 20px', color: "#fff", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        SZ
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <button
          onClick={() => navigate("/upload")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#FF0000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Upload
        </button>

        <button
          onClick={() => logout()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#FF0000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>

        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
