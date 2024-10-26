/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAllrentalbikeQuery, useReturnRentalMutation } from "@/redux/api/api";
import SkeletonTable from "@/components/CommonComponents/skeletonTable";
import Modal from "./Timemodal";


const ReturnBikes = () => {
  const { data, isLoading, refetch } = useAllrentalbikeQuery(undefined);
  const [returnRental] = useReturnRentalMutation();
  const [selectedRental, setSelectedRental] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReturnClick = (rental: any) => {

    const startTime = new Date(rental.startTime);
    if ( startTime) {
      setSelectedRental(rental);
      setIsModalOpen(true);
    } else {
      toast.error("Return time must be after the start time");
    }
  };

  const handleReturn = async (returnTime: string) => {
    if (!selectedRental) return;

    if (!returnTime || new Date(returnTime) <= new Date(selectedRental.startTime)) {
      toast.error("Return time must be after the start time");
      return;
      
    }

    try {
       
      const result = await returnRental({ id: selectedRental._id, returnTime });
      if (result.data) {
        toast.success("Bike returned successfully");
        refetch();
      } else if (result.error) {
        toast.error("Error in returning bike");
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsModalOpen(false);
      setSelectedRental(null);
    }
  };

  if (isLoading) {
    return <SkeletonTable />;
  }

  const filteredData = data?.data.filter((rental: any) => !rental.isReturned);

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
            filteredData.map((rental: any) => (
              <TableRow key={rental._id}>
                <TableCell>{rental.bikeId?.name || "N/A"}</TableCell>
                <TableCell>{rental.userId?.name || "N/A"}</TableCell>
                <TableCell>{rental.startTime ? new Date(rental.startTime).toLocaleString() : "N/A"}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleReturnClick(rental)}
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

      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleReturn} 
        bikeName={selectedRental?.bikeId?.name} // Pass the bike name to the modal
      />
    </div>
  );
};

export default ReturnBikes;
