import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Shared Components/Footer";

const MainLayout = () => {
  return (
    <div className="md:container md:mx-auto">
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
