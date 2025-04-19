
import { BarChart, LineChart } from "@/components/ui/chart";
import { StatCard } from "@/components/ui/stat-card";
import { ActivityItem } from "@/components/ui/activity-item";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Swords, Award, Trophy, User, Crown } from "lucide-react";

const Dashboard = () => {
  // Mock data for charts
  const barChartData = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 5 },
    { name: "Thu", value: 8 },
    { name: "Fri", value: 20 },
    { name: "Sat", value: 32 },
    { name: "Sun", value: 27 },
  ];

  const lineChartData = [
    { name: "Jan", value: 240 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 280 },
    { name: "Apr", value: 320 },
    { name: "May", value: 400 },
    { name: "Jun", value: 450 },
    { name: "Jul", value: 520 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Guild Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your Tornado Guild insights dashboard!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Players"
          value="128"
          icon={<Users size={18} />}
          trend={{ value: 12, isPositive: true }}
          description="vs last week"
        />
        <StatCard
          title="Battles Fought"
          value="24"
          icon={<Swords size={18} />}
          trend={{ value: 5, isPositive: true }}
          description="vs last week"
        />
        <StatCard
          title="Fame Gathered"
          value="1.2M"
          icon={<Award size={18} />}
          trend={{ value: 8, isPositive: false }}
          description="vs last week"
        />
        <StatCard
          title="Territory Control"
          value="7"
          icon={<Crown size={18} />}
          trend={{ value: 2, isPositive: true }}
          description="vs last week"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4 glass-card">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Player activity over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={barChartData}
              xField="name"
              yField="value"
              height={300}
              colors={["#6E59A5"]}
              showLegend={false}
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 glass-card">
          <CardHeader>
            <CardTitle>Latest Activity</CardTitle>
            <CardDescription>Recent guild events</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-1">
              <ActivityItem
                title="GuildMaster logged in"
                timestamp="2 minutes ago"
                icon={<Crown size={16} />}
                description="StormChaser is now online"
              />
              <Separator />
              <ActivityItem
                title="Battle Concluded"
                timestamp="15 minutes ago"
                icon={<Swords size={16} />}
                description="Victory against BlackRose Guild"
              />
              <Separator />
              <ActivityItem
                title="New Member Joined"
                timestamp="30 minutes ago"
                icon={<User size={16} />}
                description="WildHunter has joined the guild"
              />
              <Separator />
              <ActivityItem
                title="Territory Captured"
                timestamp="1 hour ago"
                icon={<Trophy size={16} />}
                description="Darkwood Forest is now under our control"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Guild Fame Progress</CardTitle>
          <CardDescription>Monthly progression</CardDescription>
        </CardHeader>
        <CardContent>
          <LineChart
            data={lineChartData}
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

export default Dashboard;
