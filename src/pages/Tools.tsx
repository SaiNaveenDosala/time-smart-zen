import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer, Trello, Calendar, StickyNote } from "lucide-react";
import PomodoroTimer from "@/components/tools/PomodoroTimer";
import TaskBoard from "@/components/tools/TaskBoard";
import DailyPlanner from "@/components/tools/DailyPlanner";
import QuickNotes from "@/components/tools/QuickNotes";

const Tools = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Productivity Tools"
        subtitle="Interactive tools to help you manage your time effectively - all built right into the website!"
        showCta={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 text-center">
            <p className="text-lg text-muted-foreground">
              No sign-ups required. All your data is saved locally in your browser.
            </p>
          </div>

          <Tabs defaultValue="pomodoro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
              <TabsTrigger value="pomodoro" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Timer className="h-5 w-5" />
                <span>Pomodoro</span>
              </TabsTrigger>
              <TabsTrigger value="tasks" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Trello className="h-5 w-5" />
                <span>Tasks</span>
              </TabsTrigger>
              <TabsTrigger value="planner" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <Calendar className="h-5 w-5" />
                <span>Planner</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex flex-col md:flex-row items-center gap-2 py-3">
                <StickyNote className="h-5 w-5" />
                <span>Notes</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pomodoro">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <PomodoroTimer />
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg border border-border space-y-4">
                  <h3 className="font-bold text-xl">How to Use</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">1. Click Start</strong> to begin a 25-minute focus session</p>
                    <p><strong className="text-foreground">2. Work without distractions</strong> until the timer completes</p>
                    <p><strong className="text-foreground">3. Take a 5-minute break</strong> when prompted</p>
                    <p><strong className="text-foreground">4. After 4 sessions,</strong> enjoy a longer 15-minute break</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Pro Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Use breaks to stretch, hydrate, or rest your eyes - but stay away from social media!
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TaskBoard />
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg border border-border space-y-4">
                  <h3 className="font-bold text-xl">How to Use</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Add tasks</strong> using the input field at the top</p>
                    <p><strong className="text-foreground">Move tasks</strong> between columns as you progress</p>
                    <p><strong className="text-foreground">To Do:</strong> Tasks you plan to work on</p>
                    <p><strong className="text-foreground">In Progress:</strong> What you're currently doing</p>
                    <p><strong className="text-foreground">Done:</strong> Completed tasks (celebrate! 🎉)</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Pro Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Limit your "In Progress" column to 2-3 tasks to maintain focus
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="planner">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <DailyPlanner />
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg border border-border space-y-4">
                  <h3 className="font-bold text-xl">How to Use</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Select a date</strong> to plan your day</p>
                    <p><strong className="text-foreground">Add time-specific tasks</strong> to create a schedule</p>
                    <p><strong className="text-foreground">View your timeline</strong> for the selected day</p>
                    <p><strong className="text-foreground">Plan ahead</strong> for upcoming days</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Pro Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Plan your week every Sunday evening for a stress-free start
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <QuickNotes />
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg border border-border space-y-4">
                  <h3 className="font-bold text-xl">How to Use</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Create notes</strong> for ideas, reminders, or study materials</p>
                    <p><strong className="text-foreground">Click any note</strong> to edit it inline</p>
                    <p><strong className="text-foreground">All notes are saved</strong> automatically in your browser</p>
                    <p><strong className="text-foreground">Delete notes</strong> you no longer need</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">💡 Pro Tip</p>
                    <p className="text-sm text-muted-foreground">
                      Use notes for quick study reminders, assignment details, or brilliant ideas
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Tools;
