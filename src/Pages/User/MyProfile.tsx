import Loading from "@/components/CommonComponents/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetProfileQuery, useGetUserReviewsQuery } from "@/redux/api/api";

import { Mail, Phone, Calendar, MapPin, Star, Shield } from "lucide-react"

interface review {
  _id: string;
  bikeId: {
    name: string;
  };
  date: string;
  rating: number;
}

export default function MyProfile() {
  const { data, isLoading } = useGetProfileQuery(undefined);
  const { data: reviewData, isLoading: reviewLoading } = useGetUserReviewsQuery(undefined);
  if (isLoading || reviewLoading) return <Loading />;
  const profile = data?.data;


  const reviews = reviewData?.data;
  

 

  return (
    <Card className="w-full  mx-auto shadow-lg flex flex-col bg-black/10 
     inset-0  backdrop-blur-md mt-40 lg:mt-0   ">
      <div className="w-full h-40 bg-blue-700">

      </div>

      <div>
        <CardHeader className=" relative flex flex-row items-center space-x-4 pb-4">
          <Avatar className="w-40 h-40 absolute lg:left-[40%] lg:top-[-115%] top-[-180%] left-[20%]">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Sarah Johnson" />
            <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-bold ml-10">
              {profile.name}
            </CardTitle>

          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid lg:grid-cols-4 justify-between w-[90%] mx-auto">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>
                {
                  profile.email
                }</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>{
                profile.phone
              }</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{
                profile.address
              }</span>
            </div>

            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span>{
                profile.role
              }</span>
            </div>
          </div>

          
             <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-2">Rental History</h3>

              {
                reviews ? <> 
                
              <ul className="space-y-2">
                {reviews?.map((review :review) => (
                  <li key={review._id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{review?.bikeId?.name} - {
                        new Date(review.date).toLocaleDateString()

                      }</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </li>
                ))}
              </ul>
                </> :  <h1 className="text-xl font-bold"> 
                  No Reviews Found
                </h1>
              }


            </div>

          

        </CardContent>
      </div>

    </Card>
  )
}