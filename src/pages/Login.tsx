
import { Button } from "@/components/ui/button";
import { Tornado } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-tornado-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated tornado logo */}
      <div className="absolute top-0 w-full">
        <div className="flex justify-center">
          <Tornado 
            size={120} 
            className="text-tornado-light opacity-0 animate-[fade-in_1s_ease-out_forwards,tornado-move_20s_linear_infinite]" 
          />
        </div>
      </div>

      {/* Login content */}
      <div className="z-10 text-center space-y-8 glass-card p-8 rounded-lg w-full max-w-md mx-4">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to Tornado</h1>
        <p className="text-tornado-gray mb-8">
          Your Albion Online Guild Statistics Dashboard
        </p>

        <Button
          size="lg"
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold"
        >
          Continue with Discord
        </Button>
      </div>
    </div>
  