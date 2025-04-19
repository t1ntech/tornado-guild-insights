
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tornado } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tornado-black">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-8">
          <Tornado size={80} className="text-tornado animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404 - Swept Away</h1>
        <p className="text-xl text-muted-foreground mb-6">
          This page has been carried off by the tornado.
        </p>
        <Button asChild size="lg" className="bg-tornado hover:bg-tornado-light">
          <Link to="/">Return to Safety</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
