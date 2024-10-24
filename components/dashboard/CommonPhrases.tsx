"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const phrases = [
  { phrase: "Let's schedule a meeting", count: 15, sentiment: "Neutral" },
  { phrase: "Great work team!", count: 12, sentiment: "Positive" },
  { phrase: "Please review ASAP", count: 10, sentiment: "Urgent" },
  { phrase: "Thanks for your help", count: 8, sentiment: "Positive" },
  { phrase: "I'll look into it", count: 7, sentiment: "Neutral" },
];

export default function CommonPhrases() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Common Phrases</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Phrase</TableHead>
            <TableHead>Count</TableHead>
            <TableHead>Sentiment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {phrases.map((item) => (
            <TableRow key={item.phrase}>
              <TableCell>{item.phrase}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.sentiment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}