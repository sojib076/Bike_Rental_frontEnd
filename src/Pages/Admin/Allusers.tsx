/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { useState } from "react";
import Loading from "@/components/CommonComponents/Loading";
import { useDeleteUsersMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } from "@/redux/api/api";

const AllUsers = () => {
    const { data, isLoading,refetch } = useGetAllUsersQuery(undefined)

    const [deleteUser] = useDeleteUsersMutation();
    const [promoteUserToAdmin] = useUpdateUserRoleMutation();
    const [deletingUserId, setDeletingUserId] = useState<string | null>(null);


    if (isLoading) {
        return <Loading />;
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
        promoteUserToAdmin(userId);
        refetch()
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
                    {(!data?.data || data.data.length === 0) ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">No Users Found</TableCell>
                        </TableRow>
                    ) : (
                        data.data.map((user: any) => (
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
        </div>
    );
};

export default AllUsers;
