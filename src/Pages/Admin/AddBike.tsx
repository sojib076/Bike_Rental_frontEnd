/* eslint-disable @typescript-eslint/no-explicit-any */

import ButtonLoadin from '@/components/CommonComponents/ButtonLoadin';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCreateBikesMutation } from '@/redux/api/api';
import { useState } from 'react';
import { toast } from 'sonner';
type FormState = {
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
};
const AddBikePage = () => {
  const [createbike, { isLoading }] = useCreateBikesMutation();


  const [formData, setFormData] = useState<FormState>({
    name: '',
    description: '',
    pricePerHour: 0,
    isAvailable: true,
    cc: 0,
    year: new Date().getFullYear(),
    model: '',
    brand: ''
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked :
        (type === 'number' ? parseFloat(value) || 0 : value)
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await createbike(formData).unwrap();
      toast.success('Bike Added Successfully');
     
    } catch (err:any) {
      console.error('Add bike failed:', err.status);
      if (err.status == 400) {
        toast.error('Please fill all the fields');
      }else{
        toast.error('Failed to add bike');
      }
    
    }
  };

  return (
    <div className=" mx-auto lg:p-4">
      <Card className="w-full mx-auto">
        <CardHeader className="bg-gray-600 py-8 lg:px-6 rounded-t-lg">
          <h1 className="text-2xl font-bold text-white">Add a New Bike</h1>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 lg:gap-x-4  ">
            <div className="grid gap-2 my-3 ">
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
            <div className="grid gap-2 ">
              <Label htmlFor="pricePerHour">Price Per Hour</Label>
              <Input
                id="pricePerHour"
                name="pricePerHour"
                type='number'
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
                type='number'
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
          </form>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 p-6 "

        >
          <Button type="submit" onClick={handleSubmit}>

            {
              isLoading ? <ButtonLoadin /> : 'Add Bike'
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddBikePage;
