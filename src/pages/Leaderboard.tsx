
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Leaderboard = () => {
  // Mock leaderboard data
  const players = [
    { rank: 1, name: "StormChaser", fame: "2.5M", class: "Frost Mage", change: "up" },
    { rank: 2, name: "ShadowBlade", fame: "2.1M", class: "Assassin", change: "down" },
    { rank: 3, name: "IronGuard", fame: "1.8M", class: "Guardian", change: "up" },
    { rank: 4, name: "NatureCaller", fame: "1.6M", class: "Druid", change: "same" },
    { rank: 5, name: "FireWeaver", fame: "1.4M", class: "Fire Mage", change: "up" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Guild Leaderboard</h1>
        <p className="text-muted-foreground">Top performing members this season</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Fame Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {players.map((player) => (
              <div
                key={player.name}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-tornado-light">
                    #{player.rank}
                  </span>
                  <Avatar>
                    <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.class}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold">{player.fame}</span>
                  <Badge variant={player.change === "up" ? "default" : "secondary"}>
                    {player.change === "up" ? "▲" : player.change === "down" ? "▼" : "•"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
