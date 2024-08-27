import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllRentalsQuery, usePayRentalMutation } from "@/redux/api/api";

type Rental = {
  userId: string
  id: number;
  bikeName: string;
  startTime: string;
  returnTime: string;
  totalCost: number;
  totalPaid: boolean;
  paymentId: string;
};

const RentalList = ({ rentals, showPayButton = false, handlePay }: { rentals: Rental[], showPayButton?: boolean, handlePay?: (paymentId: string, totalCost: number) => void }) => (
  <div className="space-y-4">
    {rentals?.map((rental) => (
      <Card key={rental.id}>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-semibold">{rental.bikeName}</h3>
            <p className="text-sm text-muted-foreground">Start: {rental.startTime}</p>
            <p className="text-sm text-muted-foreground">Return: {rental.returnTime}</p>
            <p className="font-medium">Total: ${rental.totalCost}</p>
          </div>
          {showPayButton && handlePay && (
            <Button onClick={() => handlePay(rental.paymentId, rental.totalCost)}

            disabled={rental.totalCost === 0}
            
            >Pay</Button>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function Component() {
  const [activeTab, setActiveTab] = useState("unpaid");
  const { data = [] } = useGetAllRentalsQuery(undefined);
  const [payRental] = usePayRentalMutation();

  // Handle payment
  const handlePay = async (paymentId: string, totalCost: number,) => {
    try {
      const body = {
       
        paymentId: paymentId,
        totalCost: totalCost,
      };
     const result = await payRental(body);
      if(result.data){
        window.location.href=result?.data?.data?.payment_url;
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  // Split rentals into paid and unpaid
  const paidRentals = data?.data?.filter((rental: Rental) => rental.totalPaid);
  const unpaidRentals = data?.data?.filter((rental: Rental) => !rental.totalPaid);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          <RentalList rentals={unpaidRentals} showPayButton={true} handlePay={handlePay} />
        </TabsContent>
        <TabsContent value="paid">
          <RentalList rentals={paidRentals} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
