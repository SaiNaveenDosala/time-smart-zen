import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trello, Plus, X, GripVertical } from "lucide-react";
import { toast } from "sonner";

interface Task {
  id: string;
  text: string;
  column: 'todo' | 'doing' | 'done';
}

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('taskboard');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('taskboard', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) {
      toast.error("Please enter a task");
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      text: newTask,
      column: 'todo'
    };

    setTasks([...tasks, task]);
    setNewTask("");
    toast.success("Task added!");
  };

  const moveTask = (taskId: string, newColumn: Task['column']) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, column: newColumn } : task
    ));
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast.success("Task removed");
  };

  const getTasksByColumn = (column: Task['column']) => {
    return tasks.filter(task => task.column === column);
  };

  const Column = ({ title, column, color }: { title: string, column: Task['column'], color: string }) => {
    const columnTasks = getTasksByColumn(column);

    return (
      <div className="flex-1 min-w-[250px]">
        <div className={`${color} text-white p-3 rounded-t-lg font-semibold`}>
          {title} ({columnTasks.length})
        </div>
        <div className="bg-secondary/30 p-3 rounded-b-lg min-h-[300px] space-y-2">
          {columnTasks.map(task => (
            <div
              key={task.id}
              className="bg-card p-3 rounded-lg shadow-sm border border-border group hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-2">
                <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                <p className="flex-1 text-sm">{task.text}</p>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => deleteTask(task.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-1 mt-2">
                {column !== 'todo' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 text-xs"
                    onClick={() => moveTask(task.id, column === 'doing' ? 'todo' : 'doing')}
                  >
                    ← {column === 'doing' ? 'To Do' : 'Doing'}
                  </Button>
                )}
                {column !== 'done' && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 text-xs"
                    onClick={() => moveTask(task.id, column === 'todo' ? 'doing' : 'done')}
                  >
                    {column === 'todo' ? 'Doing' : 'Done'} →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trello className="h-5 w-5 text-primary" />
          Task Board
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <Column title="To Do" column="todo" color="bg-accent" />
          <Column title="In Progress" column="doing" color="bg-primary" />
          <Column title="Done" column="done" color="bg-green-600" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskBoard;
