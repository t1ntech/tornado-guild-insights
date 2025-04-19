
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState("");
  const [notifications, setNotifications] = useState({
    battles: true,
    members: true,
    territory: true,
    achievements: false
  });
  
  const saveBotSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your bot settings have been updated successfully.",
    });
  };

  const saveDiscordSettings = () => {
    toast({
      title: "Discord settings saved",
      description: "Your Discord integration settings have been updated.",
    });
  };

  const saveNotificationSettings = () => {
    toast({
      title: "Notification preferences saved",
      description: "Your notification settings have been updated.",
    });
  };

  const saveApiSettings = () => {
    toast({
      title: "API settings saved",
      description: "Your Albion Online API settings have been updated.",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your Tornado bot and dashboard settings.</p>
      </div>

      <Tabs defaultValue="bot" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="bot">Bot Settings</TabsTrigger>
          <TabsTrigger value="discord">Discord Integration</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Configuration</TabsTrigger>
        </TabsList>
        
        {/* Bot Settings */}
        <TabsContent value="bot" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Bot Configuration</CardTitle>
              <CardDescription>Basic settings for your Tornado bot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bot-name">Bot Name</Label>
                <Input id="bot-name" defaultValue="Tornado" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bot-prefix">Command Prefix</Label>
                <Input id="bot-prefix" defaultValue="!" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activity-status">Activity Status</Label>
                <Select defaultValue="online">
                  <SelectTrigger id="activity-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="idle">Idle</SelectItem>
                    <SelectItem value="dnd">Do Not Disturb</SelectItem>
                    <SelectItem value="invisible">Invisible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <p className="text-xs text-muted-foreground">Enable detailed logging for troubleshooting</p>
                </div>
                <Switch id="debug-mode" />
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-end">
              <Button onClick={saveBotSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Discord Integration */}
        <TabsContent value="discord" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Discord Server Settings</CardTitle>
              <CardDescription>Manage Discord integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="guild-id">Discord Guild ID</Label>
                <Input id="guild-id" defaultValue="842671843769516062" />
                <p className="text-xs text-muted-foreground mt-1">The ID of your Discord server</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-role">Admin Role</Label>
                <Select defaultValue="guild-admin">
                  <SelectTrigger id="admin-role">
                    <SelectValue placeholder="Select admin role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="guild-admin">Guild Admin</SelectItem>
                    <SelectItem value="officer">Officer</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Role that can manage bot settings</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="log-channel">Log Channel</Label>
                <Select defaultValue="tornado-logs">
                  <SelectTrigger id="log-channel">
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tornado-logs">tornado-logs</SelectItem>
                    <SelectItem value="bot-logs">bot-logs</SelectItem>
                    <SelectItem value="admin-logs">admin-logs</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Channel where bot logs are sent</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="role-sync">Role Synchronization</Label>
                  <p className="text-xs text-muted-foreground">Sync Albion Online roles with Discord</p>
                </div>
                <Switch id="role-sync" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-end">
              <Button onClick={saveDiscordSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure what events trigger notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-battles">Battle Notifications</Label>
                  <p className="text-xs text-muted-foreground">Get notified about guild battles</p>
                </div>
                <Switch 
                  id="notify-battles" 
                  checked={notifications.battles}
                  onCheckedChange={(checked) => setNotifications({...notifications, battles: checked})}
                />
              </div>
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-members">Member Activity</Label>
                  <p className="text-xs text-muted-foreground">Get notified about member joins and leaves</p>
                </div>
                <Switch 
                  id="notify-members" 
                  checked={notifications.members}
                  onCheckedChange={(checked) => setNotifications({...notifications, members: checked})}
                />
              </div>
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-territory">Territory Updates</Label>
                  <p className="text-xs text-muted-foreground">Get notified about territory gains and losses</p>
                </div>
                <Switch 
                  id="notify-territory" 
                  checked={notifications.territory}
                  onCheckedChange={(checked) => setNotifications({...notifications, territory: checked})}
                />
              </div>
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-achievements">Achievements</Label>
                  <p className="text-xs text-muted-foreground">Get notified about guild and player achievements</p>
                </div>
                <Switch 
                  id="notify-achievements" 
                  checked={notifications.achievements}
                  onCheckedChange={(checked) => setNotifications({...notifications, achievements: checked})}
                />
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-end">
              <Button onClick={saveNotificationSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* API Configuration */}
        <TabsContent value="api" className="space-y-4 mt-4">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Albion Online API Settings</CardTitle>
              <CardDescription>Configure your API connection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input 
                  id="api-key" 
                  type="password" 
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key" 
                />
                <p className="text-xs text-muted-foreground mt-1">Your Albion Online API key</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="refresh-rate">Data Refresh Rate</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="refresh-rate">
                    <SelectValue placeholder="Select refresh rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 minute</SelectItem>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">How often to fetch new data</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="cache-data">Cache Data</Label>
                  <p className="text-xs text-muted-foreground">Store data locally to reduce API calls</p>
                </div>
                <Switch id="cache-data" defaultChecked />
              </div>
              
              <div className="rounded-lg border border-border bg-muted/20 p-4">
                <div className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span>API connection validated</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Last checked: Today at 15:42</p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-border pt-4 flex justify-end">
              <Button onClick={saveApiSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save API Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
