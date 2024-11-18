import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen ">
      <Header />
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
