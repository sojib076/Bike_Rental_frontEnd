/* eslint-disable @typescript-eslint/no-explicit-any */


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Loading from "@/components/CommonComponents/Loading";
import { toast } from "sonner";

import { useAllrentalbikeQuery, useReturnRentalMutation } from "@/redux/api/api";

const ReturnBikes = () => {
  const { data, isLoading, refetch } = useAllrentalbikeQuery(undefined);

 
  const [returnRental] = useReturnRentalMutation();

  const handleReturn = async (rentalId: string) => {
    try {
      const result = await returnRental(rentalId);
      if (result.data) {
        toast.success("Bike returned successfully");
        refetch();
      } else if (result.error) {
        toast.error("Error in returning bike");
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  // Debugging: Log the data to check its structure
 

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Return Bikes</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bike Name</TableHead>
            <TableHead>Rented By</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(!data?.data || data.data.length === 0) ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">No Rentals Found</TableCell>
            </TableRow>
          ) : (
            //  console.log(data.data[0].userId.name);
            data.data.map((rental: any) => (
              <TableRow key={rental._id} className="">
                <TableCell>{rental.bikeId?.name || "N/A"}</TableCell>
                <TableCell>{rental.userId?.name || "N/A"}</TableCell>
                <TableCell>{rental.startTime ? new Date(rental.startTime).toLocaleString() : "N/A"}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleReturn(rental._id)}
                    variant="outline"
                    className="mr-2 hover:scale-90 smoothAnimation"
                    disabled={rental.isReturned}
                  >
                   Calculate & Return
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReturnBikes;
