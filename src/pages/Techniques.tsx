import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Timer, Grid3x3, Target, Calendar, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Techniques = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Time Management Techniques"
        subtitle="Discover proven methods to organize your study time and boost productivity"
        showCta={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" size="lg" className="mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Timer}
              title="Pomodoro Technique"
              description="Work in focused 25-minute intervals with 5-minute breaks"
            >
              <div className="space-y-3 text-sm">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="font-semibold mb-2">How it works:</p>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                    <li>Choose a task to focus on</li>
                    <li>Set a timer for 25 minutes</li>
                    <li>Work with full concentration</li>
                    <li>Take a 5-minute break</li>
                    <li>After 4 cycles, take a longer 15-30 minute break</li>
                  </ol>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Benefits:</strong> Maintains focus, prevents burnout, 
                  and makes large tasks feel manageable.
                </p>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Grid3x3}
              title="Eisenhower Matrix"
              description="Prioritize tasks by importance and urgency"
            >
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <Card className="bg-accent/10 border-accent/20">
                    <CardContent className="p-3">
                      <p className="font-semibold text-xs mb-1">Urgent + Important</p>
                      <p className="text-xs text-muted-foreground">Do First</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-3">
                      <p className="font-semibold text-xs mb-1">Not Urgent + Important</p>
                      <p className="text-xs text-muted-foreground">Schedule</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary border-border">
                    <CardContent className="p-3">
                      <p className="font-semibold text-xs mb-1">Urgent + Not Important</p>
                      <p className="text-xs text-muted-foreground">Delegate</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted border-border">
                    <CardContent className="p-3">
                      <p className="font-semibold text-xs mb-1">Not Urgent + Not Important</p>
                      <p className="text-xs text-muted-foreground">Eliminate</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Benefits:</strong> Helps you focus on what truly matters 
                  and avoid time-wasting activities.
                </p>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Target}
              title="SMART Goals"
              description="Set Specific, Measurable, Achievable, Relevant, Time-bound goals"
            >
              <div className="space-y-3 text-sm">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 space-y-2">
                  <p><strong className="text-primary">S</strong>pecific: Clearly define what you want to achieve</p>
                  <p><strong className="text-primary">M</strong>easurable: Track your progress with metrics</p>
                  <p><strong className="text-primary">A</strong>chievable: Set realistic, attainable goals</p>
                  <p><strong className="text-primary">R</strong>elevant: Align with your academic objectives</p>
                  <p><strong className="text-primary">T</strong>ime-bound: Set deadlines for completion</p>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Example:</strong> "Complete 3 chapters of math homework 
                  by Friday at 6 PM to prepare for next week's test."
                </p>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Calendar}
              title="Daily & Weekly Planning"
              description="Organize your schedule to maximize productivity"
            >
              <div className="space-y-3 text-sm">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="font-semibold mb-2">Planning Tips:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Review your week every Sunday</li>
                    <li>Plan tomorrow's tasks tonight</li>
                    <li>Block time for important tasks</li>
                    <li>Include buffer time for unexpected events</li>
                    <li>Review and adjust daily</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Benefits:</strong> Provides structure, reduces decision 
                  fatigue, and ensures nothing falls through the cracks.
                </p>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techniques;
