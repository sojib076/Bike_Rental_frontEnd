/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from '@/components/CommonComponents/Loading';
import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/api/api';
import { logoutUser } from '@/redux/features/AuthUser';
import { useAppDispatch } from '@/redux/hooks';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { FilePenIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';



const Profile = () => {
    const dispatch = useAppDispatch();
    const { data, isLoading ,refetch ,error} = useGetProfileQuery(undefined);
    const [update,  { isLoading: updateloading }] = useUpdateProfileMutation()
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        role: '',
    });

    useEffect(() => {
        if (data) {
            setFormData(data.data);
        }
    }, [data]);

    if (isLoading) return <Loading />;

    const profile = data?.data;

    const handleInputChange = (e:any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSaveChanges = () => {

        try {
            update(formData)
            setIsEditing(false);
            refetch()
            updateloading ? toast.loading('Updating Profile') :
            toast.success('Profile Updated Successfully')
        } catch (error) {
            console.error('Profile Update Failed:', error);
            toast.error('Profile Update Failed')
        }
    };

    const handleCancel = () => {
        setFormData(profile);
        setIsEditing(false);
    };

    if (error) {
        dispatch(logoutUser())
    }
    return (
        <Card className="w-full  mx-auto">
            <CardHeader className="bg-gray-600 py-8 px-6 rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                            <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-2xl font-bold">{profile.name}</h3>
                            <p className="text-sm ">{profile.email}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleEditToggle}>
                        <FilePenIcon className="h-6 w-6" />
                        <span className="sr-only">Edit Profile</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="grid gap-2">
                    <Label htmlFor="_id">ID</Label>
                    <Input id="_id" value={formData._id} readOnly type='text' />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={formData.name} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="grid gap-2 col-span-full">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" rows={3} value={formData.address} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
            </CardContent>
            {isEditing && (
                <CardFooter className="flex justify-end gap-2 p-6">
                    <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
            )}
        </Card>
    );
};

export default Profile;














