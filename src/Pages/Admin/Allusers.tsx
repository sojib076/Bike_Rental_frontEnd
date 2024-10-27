/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { useState } from "react";

import { useDeleteUsersMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } from "@/redux/api/api";
import SkeletonTable from "@/components/CommonComponents/skeletonTable";

const AllUsers = () => {
    const [page, setPage] = useState(1);
    const limit = 3;
    const { data, isLoading,refetch } = useGetAllUsersQuery(
        { page, limit },
        { refetchOnMountOrArgChange: true }
    )

    const [deleteUser] = useDeleteUsersMutation();
    const [promoteUserToAdmin] = useUpdateUserRoleMutation();
    const [deletingUserId, setDeletingUserId] = useState<string | null>(null);

    if (isLoading) {
        return <SkeletonTable />;
    }
    const handleDelete = async (userId: string) => {
        setDeletingUserId(userId);
        try {
            await deleteUser(userId);
            toast.success("User Deleted Successfully");
        } catch {
            toast.error("Error Deleting User");
        } finally {
            setDeletingUserId(null);
        }
    };

    const handlePromote = async (userId: string) => {
        try {
            promoteUserToAdmin(userId);
            toast.success("User Promoted Successfully");
            refetch();
        } catch (error) {
            toast.error("Error Promoting User");
        }
        
    };
    
    const totalPages = data?.data?.totalPages || 1;
    const currentPage = data?.data?.currentPage || 1;
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
            <h2 className="text-2xl font-semibold mb-4">All Users</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(!data?.data?.users || data?.data?.users?.length === 0) ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">No Users Found</TableCell>
                        </TableRow>
                    ) : (
                        data?.data?.users.map((user: any) => (
                            <TableRow key={user._id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handlePromote(user._id)}
                                        variant="outline"
                                        className="mr-2 hover:scale-90 smoothAnimation"

                                    >
                                        Promote
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(user._id)}
                                        variant="destructive"
                                        className="hover:scale-90 smoothAnimation"
                                        disabled={deletingUserId === user._id}
                                    >
                                        {deletingUserId === user._id ? "Deleting..." : "Delete"}
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
        </div>
    );
};

export default AllUsers;
