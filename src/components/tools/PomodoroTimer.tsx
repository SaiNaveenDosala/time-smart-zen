import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Timer } from "lucide-react";
import { toast } from "sonner";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            handleTimerComplete();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, minutes, seconds]);

  const handleTimerComplete = () => {
    setIsActive(false);
    
    if (!isBreak) {
      setCompletedPomodoros(completedPomodoros + 1);
      toast.success("Pomodoro completed! Time for a break! 🎉");
      
      // Start break (5 minutes for short break, 15 for long break after 4 pomodoros)
      const breakTime = (completedPomodoros + 1) % 4 === 0 ? 15 : 5;
      setMinutes(breakTime);
      setSeconds(0);
      setIsBreak(true);
    } else {
      toast.success("Break over! Ready for another pomodoro? 💪");
      setMinutes(25);
      setSeconds(0);
      setIsBreak(false);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25);
    setSeconds(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (mins: number, secs: number) => {
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-primary" />
          Pomodoro Timer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={`text-6xl font-bold mb-2 ${isBreak ? 'text-accent' : 'text-primary'}`}>
            {formatTime(minutes, seconds)}
          </div>
          <p className="text-sm text-muted-foreground">
            {isBreak ? '☕ Break Time' : '📚 Focus Time'}
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <Button onClick={toggleTimer} size="lg" variant={isActive ? "secondary" : "default"}>
            {isActive ? (
              <>
                <Pause className="mr-2 h-5 w-5" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" /> Start
              </>
            )}
          </Button>
          <Button onClick={resetTimer} size="lg" variant="outline">
            <RotateCcw className="mr-2 h-5 w-5" /> Reset
          </Button>
        </div>

        <div className="bg-secondary/50 p-4 rounded-lg text-center">
          <p className="text-sm text-muted-foreground mb-1">Completed Today</p>
          <p className="text-2xl font-bold text-primary">{completedPomodoros} 🍅</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PomodoroTimer;
