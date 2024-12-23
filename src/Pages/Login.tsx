/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react';
import { useLoginMutation } from '@/redux/api/api';
import { loginSuccess } from '@/redux/features/AuthUser';
import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import ButtonLoadin from '@/components/CommonComponents/ButtonLoadin';
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [login, { isLoading }] = useLoginMutation();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Set default credentials based on the role
    const setDefaultCredentials = (role: 'user' | 'admin') => {
        if (role === 'user') {
            setEmail('user_1@gmail.com');
            setPassword('123');
        } else {
            setEmail('sojibdas123@gmail.com');
            setPassword('123');
        }
    };

    const handleSubmit = async () => {
        const formData = { email, password };

        try {
            const data = await login(formData).unwrap();
            dispatch(loginSuccess(data));
            navigate('/dashboard');
        } catch (err) {
            console.error("Login failed:", err);
            const error = err;
            toast.error((error as any)?.data?.message);
        }
    };

    return (
        <div className="dark:bg-black  bg-white h-[100vh] flex flex-col items-center justify-center">
          
          
                <h1 className='font-bold mt-10 mb-5'> 
                    click on the button to login as a user or admin
                </h1>

            <div className="flex space-x-4 mb-8 ">
                <Button onClick={() => setDefaultCredentials('user')} className="bg-blue-900 hover:bg-black dark:text-white">
                    User
                </Button>
                <Button onClick={() => setDefaultCredentials('admin')} className="
                    dark:text-white
                bg-blue-900 hover:bg-black  *:
                
                ">
                    Admin
                </Button>
            </div>
            
         
            <Card>
                <CardContent>
                    <div className="lg:py-20">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold font-[Oswald]">Login</h2>
                            <p className="text-second">
                                Enter your email and password to login to your account
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-9 text-gray-500 hover:text-gray-800"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-gray-800 text-white w-full"
                            >
                                {isLoading ? <ButtonLoadin /> : 'Login'}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
