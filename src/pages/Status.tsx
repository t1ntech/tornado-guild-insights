
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

const Status = () => {
  // Mock status data
  const services = [
    { name: "Game Server", status: "Operational", latency: "45ms" },
    { name: "Guild Features", status: "Operational", latency: "32ms" },
    { name: "Combat Logging", status: "Degraded", latency: "120ms" },
    { name: "Market API", status: "Operational", latency: "28ms" },
    { name: "Territory System", status: "Offline", latency: "-" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return <CheckCircle2 className="text-green-500" size={18} />;
      case "degraded":
        return <Clock className="text-yellow-500" size={18} />;
      case "offline":
        return <AlertCircle className="text-red-500" size={18} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational": return "bg-green-500/20 text-green-500";
      case "degraded": return "bg-yellow-500/20 text-yellow-500";
      case "offline": return "bg-red-500/20 text-red-500";
      default: return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">System Status</h1>
        <p className="text-muted-foreground">Current status of all guild services</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <Badge className={getStatusColor(service.status)}>
                      {service.status}
                    </Badge>
                  </div>
                </div>
                <span className="font-mono">{service.latency}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Status;
