import { useState } from "react";
import { Nav } from "./nav";
import { ChevronRight, Inbox,LucideIcon, PlusCircle,User,DollarSign ,Monitor} from "lucide-react";
import { Button } from "./button";


const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  const navLinks: {
    title: string;
    to: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    adminOnly?: boolean;
    userOnly?: boolean;
  }[] = [
    {
        title: "Dashboard",
        to:'/dashboard',
        icon:Inbox,
        variant:"default"
    },
    {
      title: "Profile",
      to: "/dashboard/profile",
      icon: User ,
      variant: "default",
    },
    {
      title: "Rentals",
      to: "/dashboard/rentals",
      icon:DollarSign ,
      variant: "default",
    },
    // admin only
    {
      title: "Add Bike",
      to: "/dashboard/addbike",
      icon: PlusCircle,
      variant: "default",
    },
     {
      title: "All Bikes",
      to: "/dashboard/allbikes",
      icon: Monitor,
      variant: "default",
    }
  
  
   
  ];


  
  return (
    <div className="relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 text-black">
      <div className="my-10">
        <Button
          variant="secondary"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={navLinks}
      />
    </div>
  );
};

export default Sidenavbar;