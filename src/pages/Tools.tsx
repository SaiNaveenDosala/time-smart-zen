import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer, Trello, Calendar, StickyNote, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" size="lg" className="mb-6 group">
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                No sign-ups required. All your data is saved locally in your browser.
              </p>
            </div>
          </div>

          <Tabs defaultValue="pomodoro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-2 p-2">
              <TabsTrigger value="pomodoro" className="flex flex-col md:flex-row items-center gap-3 py-4 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Timer className="h-6 w-6" />
                <span className="font-semibold">Pomodoro</span>
              </TabsTrigger>
              <TabsTrigger value="tasks" className="flex flex-col md:flex-row items-center gap-3 py-4 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Trello className="h-6 w-6" />
                <span className="font-semibold">Tasks</span>
              </TabsTrigger>
              <TabsTrigger value="planner" className="flex flex-col md:flex-row items-center gap-3 py-4 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">Planner</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex flex-col md:flex-row items-center gap-3 py-4 px-6 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <StickyNote className="h-6 w-6" />
                <span className="font-semibold">Notes</span>
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
