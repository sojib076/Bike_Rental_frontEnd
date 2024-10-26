/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent } from "@/components/ui/card";
import { useGetAllRentalsQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Loading from "@/components/CommonComponents/Loading";


export type Rental = {
  userId: string
  id: number;
  bikeName: string;
  startTime: string;
  returnTime: string;
  totalCost: number;
  totalPaid: boolean;
  paymentId: string;
  bikeId: any;
  reviewAdded: boolean;
  quantity: number;
};

const RentalList = ({ rentals, showPayButton = false  }: { rentals: Rental[], showPayButton?: boolean, handlePay?: (paymentId: string, totalCost: number) => void }) => (
  <div className="space-y-4">
    {rentals?.map((rental) => (
      <Card key={rental.userId}>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-semibold">{rental.bikeId.name}</h3>
            <p className="text-sm text-muted-foreground">Start: {rental.startTime}</p>
            <p className="text-sm text-muted-foreground">Return: {rental.returnTime}</p>
            <p className="text-sm font-bold ">Total: {rental.quantity}</p>
            <p className="font-medium">Total: ${rental.totalCost}</p>
          </div>
          {showPayButton  &&
          
  
          (
           <Link to={`/checkout/${rental.paymentId}`} className="btn btn-primary
      
           
            "
            
           >
              <Button
                disabled={
                  rental.totalCost === 0
                }
              >Pay Now</ Button>

           </Link>
          )
          }
                 
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function Component() {
  const [activeTab, setActiveTab] = useState("unpaid");
  const { data = [] ,isLoading} = useGetAllRentalsQuery(undefined,
    { refetchOnMountOrArgChange: true }

  );


  const paidRentals = data?.data?.filter((rental: Rental) => rental.totalPaid);
  const unpaidRentals = data?.data?.filter((rental: Rental) => !rental.totalPaid);

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          <RentalList rentals={unpaidRentals} showPayButton={true}   />
        </TabsContent>
        <TabsContent value="paid">
          <RentalList rentals={paidRentals} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
