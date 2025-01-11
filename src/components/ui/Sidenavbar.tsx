import { useState } from "react";
import { Nav } from "./nav";
import { ChevronRight, Inbox,LucideIcon, PlusCircle,User,DollarSign ,Monitor,BrickWallIcon,User2} from "lucide-react";
import { Button } from "./button";
import { useAppSelector } from "@/redux/hooks";



interface NavLink {
  title: string;
  to: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  adminOnly?: boolean;
  userOnly?: boolean;
}

const Sidenavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Access user role from Redux
  const userRole = useAppSelector((state) => state.userAuth.role);

  // Define navigation links
  const navLinks: NavLink[] = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: Inbox,
      variant: "default"
    },
    {
      title: "Profile",
      to: "/dashboard/profile",
      icon: User,
      variant: "default",
    },
 
    {
      title: "Rentals",
      to: "/dashboard/rentals",
      icon: DollarSign,
      variant: "default",
      userOnly: true,
    },
    {
      title: "Add Review",
      to: "/dashboard/myrentals",
      icon: Monitor,
      variant: "default",
      userOnly: true,
    },
    {
      title: "Add Bike",
      to: "/dashboard/addbike",
      icon: PlusCircle,
      variant: "default",
      adminOnly: true,
    },
    {
      title: "All Bikes",
      to: "/dashboard/allbikes",
      icon: Monitor,
      variant: "default",
      adminOnly: true,
    },
    {
      title: "Return Bikes",
      to: "/dashboard/returnbikes",
      icon: BrickWallIcon,
      variant: "default",
      adminOnly: true,
    },
    {
      title: "All Users",
      to: "/dashboard/allusers",
      icon: User2,
      variant: "default",
      adminOnly: true,
    }
  ];

  // Filter navLinks based on user role
  const filteredNavLinks = navLinks.filter((link) => {
    if (link.adminOnly && userRole !== "admin") return false;
    if (link.userOnly && userRole !== "user") return false;
    return true;
  });

  return (
    <div className="  relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 text-black">
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
        links={filteredNavLinks}
      />
    </div>
  );
};

export default Sidenavbar;

