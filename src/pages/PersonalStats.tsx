
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "@/components/ui/chart";
import { User, Trophy, Swords, Award } from "lucide-react";

const PersonalStats = () => {
  // Mock data for demonstration
  const activityData = [
    { name: "Week 1", value: 340 },
    { name: "Week 2", value: 420 },
    { name: "Week 3", value: 380 },
    { name: "Week 4", value: 510 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Personal Statistics</h1>
        <p className="text-muted-foreground">Track your individual performance and progress</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Kill Fame"
          value="1.2M"
          icon={<Swords size={18} />}
          trend={{ value: 15, isPositive: true }}
          description="vs last week"
        />
        <StatCard
          title="Death Fame"
          value="250K"
          icon={<Award size={18} />}
          trend={{ value: 5, isPositive: false }}
          description="vs last week"
        />
        <StatCard
          title="Battles Won"
          value="18"
          icon={<Trophy size={18} />}
          trend={{ value: 20, isPositive: true }}
          description="vs last week"
        />
        <StatCard
          title="Guild Contribution"
          value="High"
          icon={<User size={18} />}
          description="Top 10% of members"
        />
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Fame Progression</CardTitle>
          <CardDescription>Your weekly fame accumulation</CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart
            data={activityData}
            xField="name"
            yField="value"
            height={300}
            colors={["#9b87f5"]}
            showLegend={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalStats;
