"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, BrandSlack, BrandTeams } from "lucide-react";

const platforms = [
  { id: "teams", name: "Microsoft Teams", icon: "BrandTeams" },
  { id: "slack", name: "Slack", icon: "BrandSlack" },
  { id: "discord", name: "Discord", icon: "MessageSquare" },
];

export default function PlatformToggle() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Connected Platforms</h3>
      <div className="space-y-4">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <span>{platform.name}</span>
            </div>
            <Switch defaultChecked />
          </div>
        ))}
      </div>
    </Card>
  );
}