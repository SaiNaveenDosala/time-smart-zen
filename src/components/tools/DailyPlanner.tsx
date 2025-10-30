import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface PlannerItem {
  id: string;
  time: string;
  task: string;
  date: string;
}

const DailyPlanner = () => {
  const [items, setItems] = useState<PlannerItem[]>([]);
  const [newTime, setNewTime] = useState("");
  const [newTask, setNewTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const saved = localStorage.getItem('dailyplanner');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dailyplanner', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!newTime || !newTask.trim()) {
      toast.error("Please enter both time and task");
      return;
    }

    const item: PlannerItem = {
      id: Date.now().toString(),
      time: newTime,
      task: newTask,
      date: selectedDate
    };

    setItems([...items, item].sort((a, b) => a.time.localeCompare(b.time)));
    setNewTime("");
    setNewTask("");
    toast.success("Task scheduled!");
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast.success("Task removed");
  };

  const todayItems = items.filter(item => item.date === selectedDate);

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Daily Planner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1 block">Date</label>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="w-32">
            <label className="text-sm text-muted-foreground mb-1 block">Time</label>
            <Input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1 block">Task</label>
            <Input
              placeholder="What's planned?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
            />
          </div>
          <Button onClick={addItem}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="border border-border rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto">
          {todayItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No tasks scheduled for this day
            </p>
          ) : (
            <div className="space-y-2">
              {todayItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg group hover:bg-secondary/50 transition-colors"
                >
                  <div className="font-semibold text-primary w-16 flex-shrink-0">
                    {item.time}
                  </div>
                  <div className="flex-1">{item.task}</div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => deleteItem(item.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPlanner;
