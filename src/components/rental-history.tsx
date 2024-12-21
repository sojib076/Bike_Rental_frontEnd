import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { review } from "@/Pages/User/MyProfile"



export default function RentalHistory({reviews}:{reviews: review[]}) {

  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bike</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>comment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((rental) => (
              <TableRow key={rental._id}>
                <TableCell>{rental.bikeId.name}</TableCell>
                <TableCell>{rental.date}</TableCell>
                <TableCell>{rental.rating}</TableCell>
                <TableCell>{rental.comment.length > 40 ? rental.comment.slice(0, 40) + '...' : rental.comment

                }</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

