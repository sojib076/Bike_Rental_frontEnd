import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function NewBikesAnnouncement() {
  return (
    <section className=" ">
      <div className=" mx-auto">
        <Card className=" mx-auto overflow-hidden bg-transparent py-10 px-5">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1enVraSUyMGJpa2V8ZW58MHx8MHx8fDA%3D"
                alt="New bikes in our showroom"
               
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2">New Bikes Have Arrived!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience our latest collection of cutting-edge bikes. Visit our offline showroom to see and feel the quality for yourself.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Wide range of new models</li>
                  <li>Expert staff to assist you</li>
                  <li>Test rides available</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">Visit Our Showroom</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}