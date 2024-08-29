
import Loading from "@/components/CommonComponents/Loading";
import { Button } from "@/components/ui/button";
import { useGetProfileQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { data, isLoading } = useGetProfileQuery(undefined);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loading />
            </div>
        );
    }


    const admin = data.data.role === "admin";

    // Assuming `data` contains a `name` property for personalization
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
             

            <h1 className="text-3xl font-bold text-gray-800  dark:text-white  ">
                Welcome back, {data.data.name}!
            </h1>
            <p className="mt-2 text-gray-600 dark:text-white  ">
               Navigaate through the sidebar to access different features
            </p>
          <Link to="/dashboard/profile">
                <Button className="mt-4">Edit Profile</Button>
            </Link>
           
            
                         
                            <div className="bg-red-300 text-black dark:text-gray-600 font-semibold font-serif  p-2 rounded-lg my-4">
                              {
                                admin ? "You are an admin" : "You are a user"
                              }
                            </div>
                        
                
        </div>
    );
};

export default Dashboard;
