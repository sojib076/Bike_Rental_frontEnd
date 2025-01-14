import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react';
import { useSignUpMutation } from '@/redux/api/api';

import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';






const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [signUp, { isLoading }] = useSignUpMutation();  

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async () => {
        const formData = {
            name,
            email,
            password,
            phone,
            address,
            role: 'user',
        };
        
        try {
           await signUp(formData).unwrap();
            toast.success('Signup Successful');
            navigate('/login');
          
        } catch (error) {
            toast.error('All fields are required');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
           
        }
    };

    return (
        <div className=" dark:bg-black bg-white h-[100vh]">
            <div className="font-[Oswald] flex lg:items-center justify-center lg:mt-20  mt-16">
                <Card>
                    <CardContent className='lg:w-[500px] w-[55vh] py-5'>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold font-[Oswald]">Sign Up</h2>
                            <p className="text-second">
                                Fill out the form below to create an account.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 relative">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-9 text-gray-500 hover:text-gray-800"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    placeholder="Enter your address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                          

                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-gray-800 text-white"
                                disabled={isLoading}  // Disable the button while loading
                            >
                                {isLoading ? 'Signing Up...' : 'Sign Up'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Signup;
