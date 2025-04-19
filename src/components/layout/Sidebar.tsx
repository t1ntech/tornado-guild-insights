
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { 
  Tornado, 
  LayoutDashboard, 
  Users, 
  Activity,
  Settings, 
  ChevronLeft, 
  ChevronRight,
  User,
  ListOrdered,
  Database,
  UsersRound,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Personal Stats', path: '/personal-stats', icon: User },
  { name: 'Players', path: '/players', icon: Users },
  { name: 'Battles', path: '/battles', icon: Activity },
  { name: 'Leaderboard', path: '/leaderboard', icon: ListOrdered },
  { name: 'Loot Logger', path: '/loot-logger', icon: Database },
  { name: 'Alliances', path: '/alliances', icon: UsersRound },
  { name: 'Status', path: '/status', icon: TrendingUp },
  { name: 'Logs', path: '/logs', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={cn(
        "h-screen flex flex-col border-r border-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="relative flex-shrink-0">
            <Tornado size={32} className="text-tornado" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-tornado-light animate-pulse-light" />
            </div>
          </div>
          {!collapsed && <h1 className="text-xl font-bold text-white">Tornado</h1>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className={cn("text-muted-foreground hover:text-white", collapsed && "hidden")}
        >
          <ChevronLeft size={20} />
        </Button>
      </div>

      <div className="py-4 flex-1">
        <div className="px-3">
          {collapsed && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCollapsed(!collapsed)}
              className="w-full mb-2 text-muted-foreground hover:text-white"
            >
              <ChevronRight size={20} />
            </Button>
          )}

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return collapsed ? (
                <Tooltip key={item.path} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center justify-center p-2 rounded-md transition-colors",
                        isActive 
                          ? "bg-tornado text-white" 
                          : "text-muted-foreground hover:text-white hover:bg-secondary"
                      )}
                    >
                      <Icon size={20} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-secondary border-border text-foreground">
                    {item.name}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive 
                      ? "bg-tornado text-white" 
                      : "text-muted-foreground hover:text-white hover:bg-secondary"
                  )}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        {!collapsed && (
          <div className="text-xs text-muted-foreground">
            <p>Connected to Discord</p>
            <p className="text-tornado-light">Albion API Active</p>
          </div>
        )}
      </div>
    </div>
  );
}
