
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const Logs = () => {
  // Mock log data
  const logs = [
    { time: "13:45:22", type: "Combat", message: "Guild battle started in Blackzone Region", severity: "info" },
    { time: "13:44:15", type: "System", message: "Territory ownership updated", severity: "warning" },
    { time: "13:42:30", type: "Member", message: "New member joined: DarkWarrior", severity: "success" },
    { time: "13:40:00", type: "Combat", message: "Resources successfully defended", severity: "info" },
    { time: "13:38:45", type: "System", message: "Connection issues detected", severity: "error" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "info": return "bg-blue-500/20 text-blue-500";
      case "warning": return "bg-yellow-500/20 text-yellow-500";
      case "error": return "bg-red-500/20 text-red-500";
      case "success": return "bg-green-500/20 text-green-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">System Logs</h1>
        <p className="text-muted-foreground">Track all guild and system activities</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-muted-foreground">
                      {log.time}
                    </span>
                    <div>
                      <Badge className={getSeverityColor(log.severity)}>
                        {log.type}
                      </Badge>
                      <p className="mt-1">{log.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logs;
