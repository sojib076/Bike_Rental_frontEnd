import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

// Dummy data for demonstration
const paidRentals = [
  { id: 1, bikeName: "Mountain Explorer", startTime: "2023-06-01 10:00", returnTime: "2023-06-01 14:00", totalCost: 40 },
  { id: 2, bikeName: "City Cruiser", startTime: "2023-06-02 09:00", returnTime: "2023-06-02 17:00", totalCost: 80 },
]

const unpaidRentals = [
  { id: 3, bikeName: "Electric Rider", startTime: "2023-06-03 11:00", returnTime: "2023-06-03 15:00", totalCost: 60 },
  { id: 4, bikeName: "Beach Comber", startTime: "2023-06-04 13:00", returnTime: "2023-06-04 16:00", totalCost: 30 },
]

type Rental = {
  id: number
  bikeName: string
  startTime: string
  returnTime: string
  totalCost: number
}

const RentalList = ({ rentals, showPayButton = false }: { rentals: Rental[], showPayButton?: boolean }) => (
  <div className="space-y-4">
    {rentals.map((rental) => (
      <Card key={rental.id}>
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-semibold">{rental.bikeName}</h3>
            <p className="text-sm text-muted-foreground">Start: {rental.startTime}</p>
            <p className="text-sm text-muted-foreground">Return: {rental.returnTime}</p>
            <p className="font-medium">Total: ${rental.totalCost}</p>
          </div>
          {showPayButton && (
            <Link to={'/'}>
              <Button>Pay</Button>
            </Link>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
)

export default function Component() {
  const [activeTab, setActiveTab] = useState("unpaid")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          <RentalList rentals={unpaidRentals} showPayButton={true} />
        </TabsContent>
        <TabsContent value="paid">
          <RentalList rentals={paidRentals} />
        </TabsContent>
      </Tabs>
    </div>
  )
}