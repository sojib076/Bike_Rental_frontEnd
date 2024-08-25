import { useDeleteBikesMutation, useGetBikesQuery } from "@/redux/api/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Loading from "@/components/CommonComponents/Loading";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import ButtonLoadin from "@/components/CommonComponents/ButtonLoadin";

const AllBikes = () => {
    const { data, isLoading, refetch } = useGetBikesQuery(undefined,{
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true,
        
    });
    const [deletingBikeId, setDeletingBikeId] = useState<string | null>(null);
    const [updatingBikeId, setUpdatingBikeId] = useState<string | null>(null);
    const [deletebike , {isError }] = useDeleteBikesMutation();

    if (isLoading) {
        return <Loading />;
    }

    const handleUpdate = async (bikeId: string) => {
        setUpdatingBikeId(bikeId);
        try {
         
            console.log(`Updating bike with ID: ${bikeId}`);
        } finally {
            setUpdatingBikeId(null);
        }
    };
 
    const handleDelete = async (bikeId: string) => {
        setDeletingBikeId(bikeId);
        try {
            await deletebike(bikeId);
            toast.success("Bike Deleted Successfully");
            refetch();
        } finally {
            setDeletingBikeId(null);
        }
    }; 
    if(isError){
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
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data.data.map((bike: any) => (
                            <TableRow key={bike._id} className="">
                                <TableCell>{bike.name}</TableCell>
                                <TableCell>${bike.pricePerHour.toFixed(2)}</TableCell>
                                <TableCell>{bike.cc}</TableCell>
                                <TableCell>{bike.year}</TableCell>
                                <TableCell>{bike.model}</TableCell>
                                <TableCell>{bike.brand}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleUpdate(bike._id)}
                                        variant="outline"
                                        className="mr-2 hover:scale-90 smoothAnimation my-4"
                                        disabled={updatingBikeId === bike._id}
                                    >
                                        {updatingBikeId === bike._id ? "Updating..." : "Update"}
                                    </Button>
                                    <Button
                                        className="hover:scale-90 smoothAnimation mt-5 px-3"
                                        onClick={() => handleDelete(bike._id)}
                                        variant="destructive"
                                        disabled={deletingBikeId === bike._id}
                                    >
                                        {deletingBikeId === bike._id ? <ButtonLoadin />  : "Delete"}
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


export default AllBikes;
