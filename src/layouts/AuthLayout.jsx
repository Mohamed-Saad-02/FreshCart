import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function AuthLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="min-h-[70vh] overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
