import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Bike, Clock, Leaf, Shield } from 'lucide-react'

const reasons = [
    {
        icon: Bike,
        title: "Wide Selection",
        description: "Choose from our extensive range of high-quality bikes for every type of rider and terrain.",
    },
    {
        icon: Clock,
        title: "Flexible Rentals",
        description: "Rent by the hour, day, or week. Our flexible options fit your schedule and needs.",
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "All our bikes are regularly maintained and come with complimentary safety gear.",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Support sustainable tourism and reduce your carbon footprint while exploring.",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-20

     bg-gradient-to-tr
      dark:from-slate-950 dark:to-slate-900
        
    ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    {/* <Badge className="mb-4" variant="secondary">Our Advantages</Badge> */}
                    <h2 className="text-3xl font-bold mb-4">Why Choose BikeRent?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the best in bike rentals with our top-notch service and unbeatable benefits.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
                    {reasons.map((reason, index) => (
                        <Card key={index} className="text-center 
                        h-[200px]
                        rounded-xl
                        hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className=" 
                                    dark:bg-black/80
                                    bg-gray-50
                                relative top-[-50px] w-16 h-16 
                                rounded-full flex items-center
                                 justify-center mx-auto 
                             
                                    
                                 ">
                                    <reason.icon className="
                                    
                                    h-8 w-8 text-black
                                        dark:text-white
                                    " />
                                </div>
                                <CardTitle
                                    className=" 
                                        relative top-[-40px]
                                    "
                                >{reason.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600
                                    relative top-[-50px]
                                    text-center
                                ">{reason.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
