"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "9AM", messages: 23, tasks: 2 },
  { hour: "10AM", messages: 45, tasks: 5 },
  { hour: "11AM", messages: 32, tasks: 3 },
  { hour: "12PM", messages: 15, tasks: 1 },
  { hour: "1PM", messages: 28, tasks: 4 },
  { hour: "2PM", messages: 55, tasks: 6 },
  { hour: "3PM", messages: 41, tasks: 3 },
  { hour: "4PM", messages: 37, tasks: 4 },
];

export default function ChatStats() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Message Activity</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="messages" fill="hsl(var(--chart-1))" name="Messages" />
            <Bar dataKey="tasks" fill="hsl(var(--chart-2))" name="Tasks" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}