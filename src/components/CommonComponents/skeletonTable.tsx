/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component
  
  import { toast } from "sonner";
  import { useState } from "react";
  import {
    useDeleteUsersMutation,
    useGetAllUsersQuery,
    useUpdateUserRoleMutation,
  } from "@/redux/api/api";
  
  const SkeletonTable = () => {
    const { data, isLoading, refetch } = useGetAllUsersQuery(undefined, {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });
  
    const [deleteUser] = useDeleteUsersMutation();
    const [promoteUserToAdmin] = useUpdateUserRoleMutation();
    const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  
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
        await promoteUserToAdmin(userId);
        toast.success("User Promoted Successfully");
        refetch();
      } catch (error) {
        toast.error("Error Promoting User");
      }
    };
  
    return (
      <div className="p-6">
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> <Skeleton  className="h-4 w-[100px] " /></TableHead>
              <TableHead> <Skeleton className="h-4 w-[100px]" /></TableHead>
              <TableHead> <Skeleton className="h-4 w-[100px]" /></TableHead>
              <TableHead> <Skeleton className="h-4 w-[100px]" /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              // Render skeleton rows
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[150px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[50px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-[120px]" />
                  </TableCell>
                </TableRow>
              ))
            ) : !data?.data || data.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No Users Found
                </TableCell>
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
  
  export default SkeletonTable;
  