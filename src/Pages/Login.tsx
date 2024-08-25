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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [login, { isLoading }] = useLoginMutation();

    const handleSubmit = async () => {
        const formData = {
            email,
            password,
        };

        try {
            const  data = await login(formData).unwrap();
         
            dispatch(loginSuccess(data,));
            navigate('/dashboard');

        } catch (err) {
            console.error("Login failed:", err);
        toast.error('Please Try Again')
        }
    };

   

   
    return (
        <div className="grid lg:grid-cols-1 lg:gap-20   ">
            <div className="font-[Oswald] flex items-center justify-center lg:mt-20 py-5 mt-16 ">
                <Card>
                    <CardContent>
                        <div className="lg:py-20 ">
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
                                    className="bg-gray-800 text-white"
                                >
                                    {isLoading ? <ButtonLoadin></ButtonLoadin> : 'Login'}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Login;
