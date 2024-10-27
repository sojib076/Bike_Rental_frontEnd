/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */


import { useState, useMemo, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllUsersQuery } from '@/redux/api/api'

export default function AdminUsersChart() {
  const { data } = useGetAllUsersQuery({
    page: 1,
    limit: 1000,
   
  }, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  })

  const AllUsers = data?.data?.users || []
  const [showWeekly, setShowWeekly] = useState(false)

  const allTimeData = useMemo(() => {
    if (!AllUsers.length) return []
    const monthCounts: { [key: string]: number } = {}
    AllUsers.forEach((user: { createdAt: string | number | Date }) => {
      const createdAt = new Date(user.createdAt)
      const month = createdAt.getMonth() + 1 
      const year = createdAt.getFullYear()
      const monthKey = `${year}-${String(month).padStart(2, '0')}`
      monthCounts[monthKey] = (monthCounts[monthKey] || 0) + 1
    })
    const result = Object.keys(monthCounts).map(monthKey => ({
      date: monthKey,
      users: monthCounts[monthKey],
    }))
    result.sort((a, b) => a.date.localeCompare(b.date))
    return result
  }, [AllUsers])

  const weeklyData = useMemo(() => {
    if (!AllUsers.length) return []
    const dayCounts: { [key: string]: number } = {}
    const dateLabels: string[] = []
    const dateMap: { [key: string]: string } = {}
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const dateString = date.toISOString().slice(0, 10)
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
      dateLabels.push(dayName)
      dateMap[dateString] = dayName
      dayCounts[dayName] = 0
    }
    AllUsers.forEach((user: { createdAt: string | number | Date }) => {
      const createdAt = new Date(user.createdAt)
      createdAt.setHours(0, 0, 0, 0)
      const dateString = createdAt.toISOString().slice(0, 10)
      if (dateMap[dateString]) {
        const dayName = dateMap[dateString]
        dayCounts[dayName]++
      }
    })
    const result = dateLabels.map(dayName => ({
      date: dayName,
      users: dayCounts[dayName] || 0,
    }))
    return result
  }, [AllUsers])

  const chartData = showWeekly ? weeklyData : allTimeData

  // Extract relevant user data for the table
  const tableData = useMemo(() => {
    return AllUsers.map((user: { name: any; email: any; createdAt: string | number | Date }) => ({
      name: user.name || 'N/A', 
      email: user.email || 'N/A',
      createdAt: new Date(user.createdAt).toLocaleDateString(), 
    }))
  }, [AllUsers])

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>New User Signups</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowWeekly(!showWeekly)}
        >
          {showWeekly ? 'Show All Time' : 'Show Past Week'}
        </Button>
      </CardHeader>
      <CardContent className=''>
        <ChartContainer
          config={{
            users: {
              label: "New Users",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-[200px] md:w-[100%]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={value => {
                  if (showWeekly) {
                    return value
                  } else {
                    const [year, month] = value.split('-')
                    const date = new Date(year, month - 1)
                    return date.toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  }
                }}
              />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="users"
                fill="var(--color-users)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Table to display new users */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">New Users List</h3>
          {/* <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Joined On</th>
              </tr>
            </thead>
            <tbody className='overflow-hidden'>

              {tableData.map((user: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: Key | null | undefined) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.createdAt}</td>
                </tr>
              ))}

            </tbody>
          </table> */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((user: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: Key | null | undefined) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        </div>
      </CardContent>
    </Card>
  )
}
