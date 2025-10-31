import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tips = () => {
  const tips = [
    {
      category: "Morning Routine",
      items: [
        "Start your day with a plan - review your tasks before breakfast",
        "Tackle your most challenging task first when energy is highest",
        "Set 3 priority tasks that MUST be completed today"
      ]
    },
    {
      category: "Focus & Concentration",
      items: [
        "Avoid multitasking - your brain works best on one task at a time",
        "Turn off notifications during study sessions",
        "Create a dedicated study space free from distractions",
        "Use the 2-minute rule: if it takes less than 2 minutes, do it now"
      ]
    },
    {
      category: "Break Management",
      items: [
        "Use breaks wisely - move your body, hydrate, and rest your eyes",
        "Step away from screens during breaks for better mental recovery",
        "Schedule breaks BEFORE you feel exhausted"
      ]
    },
    {
      category: "Goal Setting",
      items: [
        "Set realistic daily goals - better to complete 3 tasks than fail at 10",
        "Break large projects into smaller, manageable chunks",
        "Celebrate small wins to maintain motivation"
      ]
    },
    {
      category: "Evening Habits",
      items: [
        "Review what you accomplished today and plan for tomorrow",
        "Prepare materials for the next day before bed",
        "Maintain a consistent sleep schedule - rest is crucial for productivity"
      ]
    }
  ];

  const motivationalQuotes = [
    "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "You will never find time for anything. If you want time, you must make it.",
    "Time management is life management.",
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Tips & Best Practices"
        subtitle="Practical advice to maximize your productivity and minimize stress"
        showCta={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/">
            <Button variant="outline" size="lg" className="mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <div className="space-y-8">
            {tips.map((section, idx) => (
              <Card key={idx} className="bg-gradient-card shadow-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-accent" />
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 space-y-6">
            <h2 className="text-3xl font-bold text-center">Words of Wisdom</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {motivationalQuotes.map((quote, idx) => (
                <Card key={idx} className="bg-primary/5 border-primary/10">
                  <CardContent className="p-6 text-center">
                    <p className="italic text-muted-foreground">"{quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-accent/10 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Remember</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Time management isn't about being busy all the time - it's about being productive, 
              balanced, and having time for what truly matters. Start with one or two tips, make them 
              habits, and gradually build your perfect productivity system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
