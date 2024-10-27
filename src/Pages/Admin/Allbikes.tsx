/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeleteBikesMutation, useGetBikesQuery } from "@/redux/api/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

import { Link } from "react-router-dom";
import { FaMotorcycle, FaSearch } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import SkeletonTable from "@/components/CommonComponents/skeletonTable";
import ButtonLoadin from "@/components/CommonComponents/ButtonLoadin";

const AllBikes = () => {
    const [page, setPage] = useState(1);
    const limit = 3;
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        availability: "",
    });

    const { data, isLoading, refetch } = useGetBikesQuery({ page, limit });
    const [deletingBikeId, setDeletingBikeId] = useState<string | null>(null);
    const [bikeToDelete, setBikeToDelete] = useState<any | null>(null);
    const [deleteBike] = useDeleteBikesMutation();

    const handleDeleteClick = (bike: any) => {
        setBikeToDelete(bike);
    };

    const handleConfirmDelete = async () => {
        if (bikeToDelete) {
            setDeletingBikeId(bikeToDelete._id);
            try {
                await deleteBike(bikeToDelete._id);
                toast.success("Bike Deleted Successfully");
                refetch();
            } finally {
                setDeletingBikeId(null);
                setBikeToDelete(null);
            }
        }
    };

    const handleCancelDelete = () => {
        setBikeToDelete(null);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const filteredData = data?.data?.bikes?.filter((bike: any) => {
        return (
            (!filters.brand || bike.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
            (!filters.model || bike.model.toLowerCase().includes(filters.model.toLowerCase())) &&
            (!filters.availability || String(bike.isAvailable) === filters.availability)
        );
    });

    const totalPages = data?.data?.totalPages || 1;
    const currentPage = data?.data?.currentPage || 1;

    if (isLoading) {
        return <SkeletonTable />;
    }
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setPage((prev) => prev + 1);
            refetch();
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setPage((prev) => Math.max(prev - 1, 1));
            refetch();
        }
    };
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">All Bikes</h2>

            <div className="flex flex-col md:flex-row justify-center lg:space-x-4 mt-4 lg:mt-10 flex-wrap gap-4 w-[70%] mx-auto">
                <div className="relative w-full md:w-auto">
                    <FaMotorcycle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        placeholder="Filter by Brand"
                        className="input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative w-full md:w-auto">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="model"
                        value={filters.model}
                        onChange={handleFilterChange}
                        placeholder="Filter by Model"
                        className="input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative w-full md:w-auto">
                    <BsCheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        name="availability"
                        value={filters.availability}
                        onChange={handleFilterChange}
                        className="select-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All</option>
                        <option value="true">Available</option>
                        <option value="false">Unavailable</option>
                    </select>
                </div>
            </div>

            <Table className="mt-6">
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
                    {(!filteredData || filteredData.length === 0) ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">No Bikes Found</TableCell>
                        </TableRow>
                    ) : (
                        filteredData.map((bike: any) => (
                            <TableRow key={bike._id}>
                                <TableCell>{bike.name}</TableCell>
                                <TableCell>${bike.pricePerHour.toFixed(2)}</TableCell>
                                <TableCell>{bike.cc}</TableCell>
                                <TableCell>{bike.year}</TableCell>
                                <TableCell>{bike.model}</TableCell>
                                <TableCell>{bike.brand}</TableCell>
                                <TableCell>
                                    <Link to={`/dashboard/updatebike/${bike._id}`}>
                                        <Button
                                            onClick={() => console.log(`Update bike ${bike._id}`)}
                                            variant="outline"
                                            className="mr-2 hover:scale-90 smoothAnimation my-4"
                                        >
                                            Update
                                        </Button>
                                    </Link>

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

       
            <div className="flex justify-center mt-5">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="px-4 py-2 mx-2 bg-gray-200  hover:bg-gray-300 rounded

                     disabled:opacity-50
                     dark:bg-gray-800 dark:text-white
                     
                     "
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    
                    className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50
                    dark:bg-gray-800 dark:text-white
                    
                    
                    "
                >
                    Next
                </button>
            </div>

           
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
