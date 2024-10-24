/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useGetAllUsersQuery } from '@/redux/api/api'


export default function AdminUsersChart() {
  const { data } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  })



  const AllUsers = data?.data || []

  const [showWeekly, setShowWeekly] = useState(false)


  const allTimeData = useMemo(() => {
    if (!AllUsers.length) return []

    const monthCounts: { [key: string]: number } = {}

    AllUsers.forEach((user: { createdAt: string | number | Date }) => {
      const createdAt = new Date(user.createdAt)
      const month = createdAt.getMonth() + 1 // months are zero-indexed
      const year = createdAt.getFullYear()
      const monthKey = `${year}-${String(month).padStart(2, '0')}`

      if (!monthCounts[monthKey]) {
        monthCounts[monthKey] = 0
      }
      monthCounts[monthKey]++
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

    // Initialize past 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(today.getDate() - i)
      const dateString = date.toISOString().slice(0, 10)
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })

      dateLabels.push(dayName)
      dateMap[dateString] = dayName
      dayCounts[dayName] = 0
    }

    // Count users per day
    AllUsers.forEach((user: { createdAt: string | number | Date }) => {
      const createdAt = new Date(user.createdAt)
      createdAt.setHours(0, 0, 0, 0) // reset time to midnight
      const dateString = createdAt.toISOString().slice(0, 10)

      if (dateMap[dateString]) {
        const dayName = dateMap[dateString]
        dayCounts[dayName]++
      }
    })

    // Build result array
    const result = dateLabels.map(dayName => ({
      date: dayName,
      users: dayCounts[dayName] || 0,
    }))

    return result
  }, [AllUsers])

  const chartData = showWeekly ? weeklyData : allTimeData

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
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "New Users",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
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
      </CardContent>
    </Card>
  )
}
