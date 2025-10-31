import { useState } from "react";
import { X, Calendar, Timer, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const FloatingHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
              <span className="text-3xl block animate-bounce">⏰</span>
            </div>
          </div>
          <div className="absolute bottom-full right-0 mb-2 bg-background border border-border rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <p className="text-sm font-medium">Need help? Click me! 💬</p>
          </div>
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <CardTitle className="text-lg">Hi! I'm Timmy</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => setIsVisible(false), 300);
                }}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Need help planning your day? Here are some quick actions:
            </p>
            
            <Link to="/tools" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Timer className="h-4 w-4" />
                Start Pomodoro Timer
              </Button>
            </Link>
            
            <Link to="/tools" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Open Daily Planner
              </Button>
            </Link>
            
            <Link to="/techniques" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Learn Techniques
              </Button>
            </Link>
            
            <p className="text-xs text-muted-foreground text-center pt-2">
              💡 All your data is saved locally in your browser
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingHelper;