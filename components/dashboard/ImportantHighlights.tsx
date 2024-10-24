"use client";

import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Flag } from "lucide-react";

const highlights = [
  {
    title: "Important Meeting",
    description: "Team sync scheduled for 3 PM",
    type: "urgent",
  },
  {
    title: "Project Deadline",
    description: "Documentation due by EOD",
    type: "warning",
  },
  {
    title: "Team Achievement",
    description: "Sprint goals completed ahead of schedule",
    type: "success",
  },
];

export default function ImportantHighlights() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Important Highlights</h3>
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <Alert key={index} variant={highlight.type === "urgent" ? "destructive" : "default"}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{highlight.title}</AlertTitle>
            <AlertDescription>{highlight.description}</AlertDescription>
          </Alert>
        ))}
      </div>
    </Card>
  );
}