import AccountSettings from "@/components/account-settings";
import Loading from "@/components/CommonComponents/Loading";
import FavoriteBikes from "@/components/favorite-bikes";
import ProfileHeader from "@/components/profile-header";
import RentalHistory from "@/components/rental-history";

import { useGetProfileQuery, useGetUserReviewsQuery } from "@/redux/api/api";



export interface review {
  _id: string;
  bikeId: {
    name: string;
  };
  date: string;
  rating: number;
  comment: string;
}

export default function MyProfile() {
  const { data, isLoading } = useGetProfileQuery(undefined);
  const { data: reviewData, isLoading: reviewLoading } = useGetUserReviewsQuery(undefined);
  if (isLoading || reviewLoading) return <Loading />;
 


  const reviews = reviewData?.data;

  console.log(reviews);
  

 

  return (
    <div className="container mx-auto px-4 py-8">
    <ProfileHeader profile={data} />
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <RentalHistory 
          reviews={reviews as review[]} 
        />
      </div>
      <div className="space-y-8">
        <FavoriteBikes />
        <AccountSettings />
      </div>
    </div>
  </div>
  )
}