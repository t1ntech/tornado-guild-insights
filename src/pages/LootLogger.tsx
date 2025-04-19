
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const LootLogger = () => {
  // Mock loot data
  const lootItems = [
    { time: "12:45", item: "Elder's Battle Axe", rarity: "Rare", value: "150,000" },
    { time: "12:30", item: "Grandmaster's Plate Armor", rarity: "Epic", value: "450,000" },
    { time: "12:15", item: "Expert's Fire Staff", rarity: "Uncommon", value: "85,000" },
    { time: "12:00", item: "Master's Leather Hood", rarity: "Rare", value: "120,000" },
    { time: "11:45", item: "Elder's Nature Staff", rarity: "Rare", value: "165,000" },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "uncommon": return "bg-green-500";
      case "rare": return "bg-blue-500";
      case "epic": return "bg-purple-500";
      case "legendary": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Loot Logger</h1>
        <p className="text-muted-foreground">Track valuable items and resources gathered</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recent Acquisitions</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {lootItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                    <div>
                      <h3 className="font-semibold">{item.item}</h3>
                      <Badge className={getRarityColor(item.rarity)}>
                        {item.rarity}
                      </Badge>
                    </div>
                  </div>
                  <span className="font-mono font-semibold text-tornado-light">
                    {item.value} Silver
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default LootLogger;
