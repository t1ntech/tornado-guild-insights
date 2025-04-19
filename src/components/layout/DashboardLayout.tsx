
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Tornado } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-tornado-black relative overflow-hidden">
      <Sidebar />
      
      {/* Animating tornado in background */}
      <div className="fixed -z-10 opacity-5">
        <Tornado size={100} className="text-tornado-light animate-tornado-move" />
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}
