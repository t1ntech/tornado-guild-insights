
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ActivityItemProps {
  title: string;
  timestamp: string;
  icon?: ReactNode;
  description?: string;
  className?: string;
}

export function ActivityItem({
  title,
  timestamp,
  icon,
  description,
  className,
}: ActivityItemProps) {
  return (
    <div className={cn("flex items-start gap-4 p-3", className)}>
      {icon && (
        <div className="mt-0.5 flex-shrink-0 rounded-full bg-muted/20 p-1.5 text-tornado-light">
          {icon}
        </div>
      )}
      <div className="flex-1 flex flex-col gap-0.5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">{title}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
