
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const Alliances = () => {
  // Mock alliance data
  const alliances = [
    { name: "Phoenix Coalition", members: 150, status: "Allied", territory: 12 },
    { name: "Dragon's Watch", members: 200, status: "Allied", territory: 8 },
    { name: "Storm Legion", members: 175, status: "Neutral", territory: 15 },
    { name: "Iron Brotherhood", members: 120, status: "Hostile", territory: 10 },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "allied": return "bg-green-500";
      case "neutral": return "bg-yellow-500";
      case "hostile": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Alliances</h1>
        <p className="text-muted-foreground">Guild relationships and territorial standings</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {alliances.map((alliance) => (
          <Card key={alliance.name} className="glass-card hover:bg-secondary/10 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{alliance.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  {alliance.name}
                </div>
              </CardTitle>
              <Badge className={getStatusColor(alliance.status)}>
                {alliance.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Users size={16} />
                    Members
                  </span>
                  <span className="font-semibold">{alliance.members}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Territories</span>
                  <span className="font-semibold">{alliance.territory}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Alliances;
