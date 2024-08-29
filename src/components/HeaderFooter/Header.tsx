import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { MenuIcon, Moon } from "lucide-react";
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
        { path: '/allbikes', label: 'All Bikes' }
    ];
    
    const authLinks = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/allbikes', label: 'All Bikes' }
    ];
    const links = auth ? authLinks : guestLinks;

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };


    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-background dark:bg-gray-900 shadow-lg smoothingAnimation">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link to={'/'} className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground dark:text-white">

                        <span className="text-primary">Okay </span>Bike
                    </span>
                </Link>
                <nav className="hidden lg:flex items-center gap-4">
                    {links.map((link) => (
                        <Link key={link.path} to={link.path} className="text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4 lg:mr-16">
                    {auth && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                                    <AvatarFallback className="cursor-pointer">SO</AvatarFallback>
                                    <span className="sr-only">Toggle user menu</span>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="dark:bg-gray-800">
                                <Link to={'/dashboard/profile'}>
                                    <DropdownMenuItem className="cursor-pointer dark:text-white">My Account</DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem className="cursor-pointer dark:text-white">Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="cursor-pointer dark:text-white">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) }
                    <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <MenuIcon className="w-6 h-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>

                 

                    <Button  onClick={toggleDarkMode}>
                        <Moon className="w-6 h-6" />
                    </Button>

                </div>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="bg-background dark:bg-gray-800 p-4">
                    <div className="grid gap-4">
                        {links.map((link) => (
                            <Link key={link.path} to={link.path} className="text-sm font-medium text-foreground dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
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
