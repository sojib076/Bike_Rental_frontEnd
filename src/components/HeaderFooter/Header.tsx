import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/features/AuthUser";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector((state) => state.userAuth);
    const guestLinks = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/login', label: 'Login' },
        { path: '/signup', label: 'Signup' },
    ];
    
    const authLinks = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/dashboard', label: 'Dashboard' },
    ];
    const links = auth ? authLinks : guestLinks;

  
   

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-background shadow-lg 
        smoothingAnimation">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link to={'/'} className="flex items-center gap-2">
                    <span className="text-lg font-bold">Acme Inc</span>
                </Link>
                <nav className="hidden lg:flex items-center gap-4">
                    {links.map((link) => (
                        <Link key={link.path} to={link.path} className="text-sm font-medium hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4 lg:mr-16">
                    {auth ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                    <AvatarFallback className="cursor-pointer">SO</AvatarFallback>
                                    <span className="sr-only">Toggle user menu</span>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <Link to={'/dashboard/profile'}>   <DropdownMenuItem className="cursor-pointer">My Account</DropdownMenuItem></Link>
                                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={()=>dispatch(logoutUser())} className="cursor-pointer">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <MenuIcon className="w-6 h-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    )}
                </div>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="bg-background p-4">
                    <div className="grid gap-4">
                        {links.map((link) => (
                            <Link key={link.path} to={link.path} className="text-sm font-medium hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;
