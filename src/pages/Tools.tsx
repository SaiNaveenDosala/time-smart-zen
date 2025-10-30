import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Trello, TreePine, StickyNote } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: Calendar,
      name: "Google Calendar",
      description: "Schedule classes, assignments, and personal events in one place",
      use: "Time blocking and deadline tracking",
      url: "https://calendar.google.com",
      color: "text-blue-600"
    },
    {
      icon: Trello,
      name: "Trello",
      description: "Visual project management with boards, lists, and cards",
      use: "Organize tasks and track progress",
      url: "https://trello.com",
      color: "text-blue-500"
    },
    {
      icon: TreePine,
      name: "Forest",
      description: "Stay focused and grow virtual trees while studying",
      use: "Focus timer and distraction blocker",
      url: "https://www.forestapp.cc",
      color: "text-green-600"
    },
    {
      icon: StickyNote,
      name: "Notion",
      description: "All-in-one workspace for notes, tasks, and databases",
      use: "Note-taking and knowledge management",
      url: "https://notion.so",
      color: "text-gray-800"
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Productivity Tools & Resources"
        subtitle="Powerful apps and platforms to help you stay organized and focused"
        showCta={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground">
              These carefully selected tools can transform how you manage your time. 
              Choose the ones that fit your workflow and start building better habits today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <tool.icon className={`h-6 w-6 ${tool.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <CardDescription className="mt-1">{tool.use}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{tool.description}</p>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full group" variant="outline">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-accent/10 rounded-xl border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <StickyNote className="h-6 w-6 text-accent" />
              Pro Tip: Start Small
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Don't try to use all these tools at once! Pick one or two that match your needs and 
              master them before exploring others. The best productivity system is the one you'll 
              actually use consistently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
