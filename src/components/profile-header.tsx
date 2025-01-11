import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, PhoneCall, Shield,  } from 'lucide-react'
import { Link } from "react-router-dom"
type profile = {
  data: profile
  _id:  string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  createdAt: string;

}
export default function ProfileHeader({profile}:{
  profile: profile 
}) {
  const userProfile = profile?.data as profile;
  
  return (
    <Card className="mb-8 shadow-black">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User's profile picture" />
          <AvatarFallback>{
            userProfile.name.charAt(0)
            }</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <CardTitle className="text-2xl">{
            userProfile.name
            }</CardTitle>
          <CardDescription>Bike Enthusiast</CardDescription>
        </div>
       
        <Button className="ml-auto">
        <Link
          to={'/dashboard/updateprofile'}
        >
          Edit Profile
        </Link>
        </Button>
     
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>{
              userProfile.role
              }</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            <span>{
              userProfile.phone
              }</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{
              userProfile.address
              }</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

