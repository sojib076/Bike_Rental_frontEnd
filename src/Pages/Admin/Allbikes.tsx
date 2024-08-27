/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeleteBikesMutation, useGetBikesQuery } from "@/redux/api/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Loading from "@/components/CommonComponents/Loading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import ButtonLoadin from "@/components/CommonComponents/ButtonLoadin";

const AllBikes = () => {
    const { data, isLoading, refetch } = useGetBikesQuery(undefined, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
    });

    const [deletingBikeId, setDeletingBikeId] = useState<string | null>(null);
    const [bikeToDelete, setBikeToDelete] = useState<any | null>(null); 
    const [deletebike, { isError }] = useDeleteBikesMutation();

    if (isLoading) {
        return <Loading />;
    }

    const handleDeleteClick = (bike: any) => {
        setBikeToDelete(bike);
    };

    const handleConfirmDelete = async () => {
        if (bikeToDelete) {
            setDeletingBikeId(bikeToDelete._id);
            try {
                await deletebike(bikeToDelete._id);
                toast.success("Bike Deleted Successfully");
                refetch();
            } finally {
                setDeletingBikeId(null);
                setBikeToDelete(null); // Clear the selected bike
            }
        }
    };

    const handleCancelDelete = () => {
        setBikeToDelete(null); // Close the modal without deleting
    };

    if (isError) {
        toast.error("Error Deleting");
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">All Bikes</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Price Per Hour</TableHead>
                        <TableHead>CC</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Model</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(!data?.data || data.data.length === 0) ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">No Bikes Found</TableCell>
                        </TableRow>
                    ) : (
                        data.data.map((bike: any) => (
                            <TableRow key={bike._id}>
                                <TableCell>{bike.name}</TableCell>
                                <TableCell>${bike.pricePerHour.toFixed(2)}</TableCell>
                                <TableCell>{bike.cc}</TableCell>
                                <TableCell>{bike.year}</TableCell>
                                <TableCell>{bike.model}</TableCell>
                                <TableCell>{bike.brand}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => console.log(`Update bike ${bike._id}`)}
                                        variant="outline"
                                        className="mr-2 hover:scale-90 smoothAnimation my-4"
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        className="hover:scale-90 smoothAnimation mt-5 px-3"
                                        onClick={() => handleDeleteClick(bike)}
                                        variant="destructive"
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>

            {/* Confirmation Modal */}
            {bikeToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                        <p>Are you sure you want to delete the bike "{bikeToDelete.name}"?</p>
                        <div className="flex justify-end mt-4">
                            <Button
                                onClick={handleConfirmDelete}
                                variant="destructive"
                                className="mr-2"
                                disabled={deletingBikeId === bikeToDelete._id}
                            >
                                {deletingBikeId === bikeToDelete._id ? <ButtonLoadin /> : "Confirm"}
                            </Button>
                            <Button
                                onClick={handleCancelDelete}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllBikes;
