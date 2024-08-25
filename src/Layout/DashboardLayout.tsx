import Header from "@/components/HeaderFooter/Header";
import Sidenavbar from "@/components/ui/Sidenavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>

            <div>
                <Header></Header>
                <div className="flex lg:flex-row flex-col ">
                    <div className="lg:mt-20 mt-10">
                        <Sidenavbar></Sidenavbar>
                    </div>
                    <div className=" lg:w-[90%]  lg:mt-20 mt-10 lg:pl-20 p-2 ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;