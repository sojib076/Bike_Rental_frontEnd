import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTable = () => {
  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead><Skeleton className="h-4 w-[100px] shimmer-animation" /></TableHead>
            <TableHead><Skeleton className="h-4 w-[100px] shimmer-animation" /></TableHead>
            <TableHead><Skeleton className="h-4 w-[100px] shimmer-animation" /></TableHead>
            <TableHead><Skeleton className="h-4 w-[100px] shimmer-animation" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell><Skeleton className="h-4 w-[100px] shimmer-animation" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[150px] shimmer-animation" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[50px] shimmer-animation" /></TableCell>
              <TableCell><Skeleton className="h-8 w-[120px] shimmer-animation" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SkeletonTable;
