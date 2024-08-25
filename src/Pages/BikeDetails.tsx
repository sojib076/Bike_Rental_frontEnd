import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";



const BikeDetails = () => {
 

    return (
          <div className="  px-4 py-12 md:py-16 lg:py-20 lg:px-20 lg:mt-10 mt-0 ">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className=" mt-10 lg:mt-0">
                <img
                  src="/placeholder.svg"
                  alt="Bike"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }}
                />
              </div>
              <div className="order-1 ">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">Harley-Davidson Street Glide</h1>
                  <p className="text-muted-foreground text-lg">
                    Experience the thrill of the open road with this powerful and stylish Harley-Davidson Street Glide.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground">Price per Hour</p>
                      <p className="text-2xl font-bold">$50</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Availability</p>
                      <p className="text-2xl font-bold">In Stock</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Engine Displacement</p>
                      <p className="text-2xl font-bold">1,746 cc</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Year</p>
                      <p className="text-2xl font-bold">2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Model</p>
                      <p className="text-2xl font-bold">Street Glide</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Brand</p>
                      <p className="text-2xl font-bold">Harley-Davidson</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg">Rent Now</Button>
                    <Button size="lg" variant="outline">
                      <HeartIcon className="w-5 h-5 mr-2" />
                      Add to Favorites
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
    )
};

export default BikeDetails;


