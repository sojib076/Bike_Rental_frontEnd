import Header from "@/components/HeaderFooter/Header";
import Sidenavbar from "@/components/ui/Sidenavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dark:bg-black">
      <Header />

      <div className="flex">
        {/* Sidenavbar with fixed position */}
        <div className="fixed top-0 left-0 h-screen  lg:mt-20 mt-10">
          <Sidenavbar />
        </div>

        {/* Main content area with left margin */}
        <div className="lg:ml-28  lg:mt-20  lg:pl-28 p-2 w-[90%] mx-auto min-h-screen  mt-52 " >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
