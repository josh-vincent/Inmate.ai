"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Review Q4 Marketing Strategy",
    platform: "Teams",
    status: "urgent",
    created: "2 hours ago",
  },
  {
    id: 2,
    title: "Update Project Timeline",
    platform: "Slack",
    status: "completed",
    created: "4 hours ago",
  },
  {
    id: 3,
    title: "Prepare Client Presentation",
    platform: "Teams",
    status: "pending",
    created: "1 hour ago",
  },
];

export default function TasksOverview() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Tasks Generated from Conversations</h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 bg-muted rounded-lg"
          >
            <div className="flex items-center gap-3">
              {task.status === "urgent" && (
                <AlertCircle className="h-5 w-5 text-destructive" />
              )}
              {task.status === "completed" && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
              {task.status === "pending" && (
                <Clock className="h-5 w-5 text-yellow-500" />
              )}
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-muted-foreground">
                  Created {task.created} on {task.platform}
                </p>
              </div>
            </div>
            <Badge variant={task.status === "urgent" ? "destructive" : "secondary"}>
              {task.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}