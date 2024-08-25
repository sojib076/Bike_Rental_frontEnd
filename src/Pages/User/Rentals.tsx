import { useGetAllRentalsQuery } from "@/redux/api/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Loading from "@/components/CommonComponents/Loading";

const Rentals = () => {
    const { data, isLoading } = useGetAllRentalsQuery(undefined);

    if (isLoading) {
        return <Loading />;
    }
 
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Rentals</h2>
            <Table>
                <TableHeader>
                    <TableRow>

                        <TableHead>Start Time</TableHead>
                        <TableHead>Return Time</TableHead>
                        <TableHead>Total Cost</TableHead>
                        <TableHead>Is Returned?</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(!data?.data || data.data.length === 0) ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">No Rentals Found</TableCell>
                        </TableRow>
                    ) : (
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data.data.map((rental:any) => (
                            <TableRow key={rental._id}>
                                <TableCell>{new Date(rental.startTime).toLocaleString()}</TableCell>
                                <TableCell>{rental.returnTime ? new Date(rental.returnTime).toLocaleString() : 'Not Returned'}</TableCell>
                                <TableCell>${rental.totalCost.toFixed(2)}</TableCell>
                                <TableCell>{rental.isReturned ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default Rentals;