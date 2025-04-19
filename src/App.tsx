
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Players from "./pages/Players";
import Battles from "./pages/Battles";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import PersonalStats from "./pages/PersonalStats";
import Leaderboard from "./pages/Leaderboard";
import LootLogger from "./pages/LootLogger";
import Alliances from "./pages/Alliances";
import Status from "./pages/Status";
import Logs from "./pages/Logs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/players" element={<DashboardLayout><Players /></DashboardLayout>} />
          <Route path="/battles" element={<DashboardLayout><Battles /></DashboardLayout>} />
          <Route path="/personal-stats" element={<DashboardLayout><PersonalStats /></DashboardLayout>} />
          <Route path="/leaderboard" element={<DashboardLayout><Leaderboard /></DashboardLayout>} />
          <Route path="/loot-logger" element={<DashboardLayout><LootLogger /></DashboardLayout>} />
          <Route path="/alliances" element={<DashboardLayout><Alliances /></DashboardLayout>} />
          <Route path="/status" element={<DashboardLayout><Status /></DashboardLayout>} />
          <Route path="/logs" element={<DashboardLayout><Logs /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
