
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, SortAsc, SortDesc, Filter } from "lucide-react";

// Mock player data
const mockPlayers = [
  { id: 1, name: "StormChaser", role: "GuildMaster", level: 120, fame: "5.8M", lastActive: "2 minutes ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=1" },
  { id: 2, name: "WildHunter", role: "Officer", level: 98, fame: "2.3M", lastActive: "5 hours ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=2" },
  { id: 3, name: "ShadowKnight", role: "Member", level: 76, fame: "1.5M", lastActive: "1 day ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=3" },
  { id: 4, name: "MisticArcher", role: "Member", level: 82, fame: "1.8M", lastActive: "3 hours ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=4" },
  { id: 5, name: "IronShield", role: "Officer", level: 105, fame: "3.2M", lastActive: "30 minutes ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=5" },
  { id: 6, name: "FlameWizard", role: "Member", level: 68, fame: "1.1M", lastActive: "2 days ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=6" },
  { id: 7, name: "FrostBlade", role: "Member", level: 73, fame: "1.4M", lastActive: "4 hours ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=7" },
  { id: 8, name: "SilverHawk", role: "Member", level: 65, fame: "0.9M", lastActive: "1 week ago", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=8" },
];

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const filteredPlayers = mockPlayers
    .filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.level - b.level;
      } else {
        return b.level - a.level;
      }
    });

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Guild Members</h1>
        <p className="text-muted-foreground">View and manage all players in your guild.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search players..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto justify-end">
          <Button variant="outline" size="icon" onClick={toggleSortOrder}>
            {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
          </Button>
          <Button variant="outline" size="icon">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle>Guild Members</CardTitle>
          <CardDescription>
            {filteredPlayers.length} members found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {filteredPlayers.map((player) => (
              <div 
                key={player.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={player.avatar} alt={player.name} />
                    <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{player.name}</h3>
                      <Badge variant={player.role === "GuildMaster" ? "default" : player.role === "Officer" ? "secondary" : "outline"}>
                        {player.role}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last active: {player.lastActive}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm">Level <span className="font-bold">{player.level}</span></div>
                    <div className="text-xs text-tornado-light">{player.fame} Fame</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Players;
