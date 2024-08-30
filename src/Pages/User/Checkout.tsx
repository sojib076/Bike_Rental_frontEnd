
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { User, CreditCard } from 'lucide-react'
import { BsBicycle } from 'react-icons/bs'
import { useGetSingleRentalQuery, usePayRentalMutation } from '@/redux/api/api'
import { useParams } from 'react-router-dom';


export default function CheckoutPage() {
    const [payRental] = usePayRentalMutation();




const { id } = useParams();



const { data, isLoading } = useGetSingleRentalQuery(id);




if (isLoading) return <div>Loading...</div>

const bike = data?.data?.bikeId?.name
const user = data?.data?.userId?.name
const total = data?.data?.totalCost
const transid = data?.data?.paymentId

        
const handlePay = async (paymentId: string, totalCost: number,) => {
    console.log(paymentId, totalCost);
    try {
      const body = {
       
        paymentId: paymentId,
        totalCost: totalCost,
      };
     const result = await payRental(body);
     console.log(result);
      if(result.data){
        window.location.href=result?.data?.data?.payment_url;
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-[90%]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Bike Rental Checkout</CardTitle>
          <CardDescription>Complete your rental process</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <BsBicycle className="w-6 h-6 text-green-600" />
            <div>
              <Label htmlFor="bikeName">Bike Name</Label>
              <Input id="bikeName" value={bike} readOnly className="mt-1" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6 text-blue-600" />
            <div>
              <Label htmlFor="userName">User Name</Label>
              <Input id="userName" value={user} readOnly className="mt-1" />
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total Price:</span>
            <span className="text-lg font-bold">${total}</span>
          </div>
          
         
          
      
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg"           onClick={() => handlePay(transid, total)}>
            <CreditCard className="w-4 h-4 mr-2" 
      
            />
            Pay Now $
          </Button>
        </CardFooter>
      </Card>
    </div>
    
  )
}