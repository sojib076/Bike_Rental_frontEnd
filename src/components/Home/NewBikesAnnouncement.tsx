import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


import { ArrowRight, Zap } from 'lucide-react'

const newBike = {
  name: "ElectroGlide Pro",
  type: "Electric",
  description: "Experience the future of cycling with our latest electric bike. Featuring a powerful motor, extended range battery, and smart connectivity.",
  image: "/placeholder.svg?height=300&width=400",
  features: ["500W Motor", "80km Range", "Smart Display", "Quick Charge"],
}

export default function NewBikeAnnouncement() {
  return (
    <section className="py-16 
    pt-20
   
      dark:mt-0
    bg-gradient-to-tr
      dark:from-slate-950 dark:to-slate-900

    from-sky-600 to-gray-400
    
    ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            {/* <Badge className="mb-4 bg-yellow-400 text-yellow-900">New Arrival</Badge> */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Introducing the {newBike.name}
            </h2>
            <p className="text-xl text-white mb-6">{newBike.description}</p>
            <ul className="grid grid-cols-2 gap-4 mb-8">
              {newBike.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Reserve Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2 w-[100%]">
            <Card className="w-full lg:max-w-md mx-auto">
              <CardHeader>
                <img
                  src={newBike.image}
                  alt={newBike.name}
                  width={400}
                  height={300}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{newBike.name}</CardTitle>
                <CardDescription>{newBike.type}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

