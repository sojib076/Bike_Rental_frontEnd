/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
  } from 'recharts';
  
  interface RentalData {
    _id: string;
    bikeId: {
      _id: string;
      name: string;
      type: string;
      price: number;
    };
    userId: {
      _id: string;
      name: string;
      email: string;
    };
    startTime: string;
    returnTime: string;
    totalCost: number;
    totalPaid: boolean;
    isReturned: boolean;
    paymentId: string;
    quantity: number;
  }
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const userEmail = payload[0].payload.userId?.email; 
      return (
        <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-lg">
          <p className="text-gray-800">{label}</p>
          <p className="text-gray-600">Earn: ${payload[0].value}</p>
          <p className="text-gray-600"> {userEmail}</p>
        </div>
      );
    }
    return null;
  };
  
  const BikeChart = ({ rentalDataArray }: { rentalDataArray: RentalData[] }) => {
    const chartData = rentalDataArray.map(data => ({
      name: data.bikeId?.name,
      cost: data.totalCost,
      userEmail: data.userId?.email, 
    }));
  
    return (
      <div className="chart-container mx-auto p-4 bg-white rounded-lg shadow-lg mt-20">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Bike Rental Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="cost" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default BikeChart;
  