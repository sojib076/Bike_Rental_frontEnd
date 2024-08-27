/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter, } from '@/components/ui/card'; 
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import { useUpdateBikeMutation } from "@/redux/api/api";
import { toast } from "sonner";
import ButtonLoadin from "@/components/CommonComponents/ButtonLoadin";


type FormState = {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    isAvailable: boolean;
    cc: number;
    year: number;
    model: string;
    imgageurl: string;
    brand: string;
};

const UpdateBike = () => {
    const Data = useLoaderData() as { data: FormState };

    const [updatebike, { isLoading }] = useUpdateBikeMutation();

    const bikeData = Data?.data as FormState
 
    const [formData, setFormData] = useState({
        name: bikeData?.name || "",
        description: bikeData?.description || "",
        pricePerHour: bikeData?.pricePerHour || 0,
        cc: bikeData?.cc || 0,
        year: bikeData.year || 0,
        model: bikeData.model || "",
        brand: bikeData.brand || "",
        imgageurl: bikeData.imgageurl || "",
    });



    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'pricePerHour' || name === 'cc' || name === 'year' ? Number(value) : value,
        });
    };

    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          await updatebike({ id: bikeData._id, body: formData }).unwrap();
          toast.success('Bike Added Successfully');
        } catch (error) {
          console.error("Failed to update bike:", error);
        }
      };

    return (
        <div className="mx-auto lg:p-4">
            <Card className="w-full mx-auto">
                <CardHeader className="bg-gray-600 py-8 lg:px-6 rounded-t-lg">
                    <h1 className="text-2xl font-bold text-white">Update Bike</h1>
                </CardHeader>

                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 lg:gap-x-4">
                        <div className="grid gap-2 my-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter bike name"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                rows={3}
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter bike description"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="pricePerHour">Price Per Hour</Label>
                            <Input
                                id="pricePerHour"
                                name="pricePerHour"
                                type="number"
                                value={formData.pricePerHour}
                                onChange={handleChange}
                                placeholder="Enter price per hour"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cc">CC</Label>
                            <Input
                                id="cc"
                                name="cc"
                                value={formData.cc}
                                onChange={handleChange}
                                placeholder="Enter bike CC"
                                required
                                type="number"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Year</Label>
                            <Input
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                placeholder="Enter bike year"
                                required
                                type="number"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="model">Model</Label>
                            <Input
                                id="model"
                                name="model"
                                type="text"
                                value={formData.model}
                                onChange={handleChange}
                                placeholder="Enter bike model"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="brand">Brand</Label>
                            <Input
                                id="brand"
                                name="brand"
                                type="text"
                                value={formData.brand}
                                onChange={handleChange}
                                placeholder="Enter bike brand"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
              <Label htmlFor="brand">Image url </Label>
              <Input
                id="imgageurl"
                name="imgageurl"
                type="text"
                value={formData.imgageurl}
                onChange={handleChange}
                placeholder="Enter bike brand"
                required
              />
            </div>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-end gap-2 p-6">
                    <Button type="submit" onClick={handleSubmit}
                    disabled={isLoading}
                    >
                      {
                      
                        isLoading ? <ButtonLoadin></ButtonLoadin> : "Update"
                      }
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default UpdateBike;
