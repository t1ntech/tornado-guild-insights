
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import { Trophy, Clock, Users, Shield, Swords } from "lucide-react";

// Mock battle data
const recentBattles = [
  { 
    id: 1,
    enemy: "BlackRose Guild",
    result: "Victory",
    kills: 24,
    deaths: 12,
    date: "Today, 14:32",
    fame: "125.5K",
    players: 15,
  },
  { 
    id: 2,
    enemy: "Crimson Oath",
    result: "Defeat",
    kills: 18,
    deaths: 22,
    date: "Yesterday, 20:15",
    fame: "98.2K",
    players: 12,
  },
  { 
    id: 3,
    enemy: "Azure Knights",
    result: "Victory",
    kills: 31,
    deaths: 14,
    date: "2 days ago, 16:45",
    fame: "156.7K",
    players: 18,
  },
  { 
    id: 4,
    enemy: "Ember Legion",
    result: "Defeat",
    kills: 9,
    deaths: 15,
    date: "3 days ago, 12:10",
    fame: "72.4K", 
    players: 10,
  },
  { 
    id: 5,
    enemy: "Silver Wolves",
    result: "Victory", 
    kills: 27,
    deaths: 8,
    date: "5 days ago, 18:22",
    fame: "143.1K",
    players: 16,
  },
];

// For chart data
const killsData = [
  { name: "Week 1", value: 143 },
  { name: "Week 2", value: 207 },
  { name: "Week 3", value: 186 },
  { name: "Week 4", value: 253 },
];

const Battles = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Battle Statistics</h1>
        <p className="text-muted-foreground">Track your guild's combat performance.</p>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="recent">Recent Battles</TabsTrigger>
          <TabsTrigger value="statistics">Battle Statistics</TabsTrigger>
          <TabsTrigger value="territory">Territory Warfare</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Recent Battles</CardTitle>
              <CardDescription>Last 5 battles your guild participated in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBattles.map((battle) => (
                  <div key={battle.id} className="border border-border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold flex items-center gap-2">
                          vs. {battle.enemy}
                          <Badge variant={battle.result === "Victory" ? "default" : "destructive"}>
                            {battle.result}
                          </Badge>
                        </h3>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} />
                          <span>{battle.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <div className="flex gap-1 items-center">
                          <Users size={16} className="text-muted-foreground" />
                          <span>{battle.players}</span>
                        </div>
                        <div className="text-tornado-light font-medium">
                          {battle.fame} Fame
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Swords size={16} className="text-green-500" />
                        <span><span className="font-medium">{battle.kills}</span> Kills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-red-500" />
                        <span><span className="font-medium">{battle.deaths}</span> Deaths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-tornado-light" />
                        <span><span className="font-medium">{(battle.kills / (battle.kills + battle.deaths) * 100).toFixed(1)}%</span> Efficiency</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="statistics" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
              <CardDescription>Kill statistics over the past month</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={killsData}
                xField="name"
                yField="value"
                height={300}
                colors={["#6E59A5"]}
              />
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Kills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">789</div>
                <p className="text-xs text-muted-foreground">Past 30 days</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Kill/Death Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.54</div>
                <p className="text-xs text-muted-foreground">Past 30 days</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Victory Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">62%</div>
                <p className="text-xs text-muted-foreground">Past 30 days</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="territory" className="mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Territory Control</CardTitle>
              <CardDescription>Current territory status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 text-center">
                <p className="text-muted-foreground">Territory warfare data will be available soon.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Battles;
