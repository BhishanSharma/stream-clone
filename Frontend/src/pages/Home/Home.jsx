import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

function Home() {
  return (
    <div style={{ display: "flex", height: "90%" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Home;
