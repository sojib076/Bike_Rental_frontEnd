import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetfavBikesQuery } from "@/redux/api/api";




export default function FavoriteBikes() {
  const  {data,isLoading }= useGetfavBikesQuery(undefined,{

  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Favorite Bikes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {Array(3).fill(null).map((_, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 rounded-md mb-2" style={{ width: 80, height: 80 }} />
                <div className="bg-gray-200 h-4 rounded-md mb-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
    
  }

  const favoriteBikes = data?.data;
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorite Bikes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {favoriteBikes?.map((bike) => (
            <div key={bike.id} className="text-center">
              <img
                src={bike?.bikeId.imgageurl}
                alt={bike?.bikeId.name}
             
                className="rounded-md mb-2
                  max-h-16 w-full object-cover
                "
              />
              <p className="text-sm font-medium">{bike?.bikeId.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

