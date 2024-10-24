"use client";

import { MessageSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Chat Analytics</h1>
        <p className="text-muted-foreground">Your communication insights for today</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          Compose Message
        </Button>
      </div>
    </div>
  );
}