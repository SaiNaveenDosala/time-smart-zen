import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Target, TrendingUp, Calendar, Timer, BookOpen, Lightbulb, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Master Your Time. Master Your Life."
        subtitle="Discover proven time management techniques designed specifically for students to balance academics, activities, and personal growth."
        ctaText="Learn Techniques"
        ctaLink="/techniques"
        secondaryCtaText="Explore Tools"
        secondaryCtaLink="/tools"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Time Management Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In today's fast-paced academic environment, effective time management is the key to reducing stress, 
              meeting deadlines, and achieving your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <FeatureCard
              icon={Brain}
              title="Reduce Stress"
              description="Plan ahead and avoid last-minute cramming sessions that lead to anxiety and burnout."
            />
            <FeatureCard
              icon={Target}
              title="Meet Deadlines"
              description="Never miss an assignment deadline again with structured planning and prioritization."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Boost Performance"
              description="Focused study sessions lead to better retention and improved academic results."
            />
            <FeatureCard
              icon={Calendar}
              title="Balance Life"
              description="Make time for studies, hobbies, friends, and self-care without feeling overwhelmed."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Navigation</h2>
            <p className="text-lg text-muted-foreground">Jump right into what you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/techniques" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Techniques</CardTitle>
                  <CardDescription>Learn proven time management methods</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tools" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Tools & Resources</CardTitle>
                  <CardDescription>Interactive tools to boost productivity</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tips" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Study Tips</CardTitle>
                  <CardDescription>Practical advice to stay productive</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto border border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Timer className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Focus Zone</h2>
                <p className="text-muted-foreground">Try our built-in Pomodoro Timer for focused study sessions</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground">
                🎯 <strong>25 minutes</strong> of focused work + <strong>5 minutes</strong> break
              </p>
              <p className="text-muted-foreground text-sm">
                Perfect for maintaining concentration and avoiding burnout during study sessions.
              </p>
              <Link to="/tools">
                <Button size="lg" className="group">
                  Start Pomodoro Timer
                  <Timer className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary mb-3">💡 MOTIVATION OF THE DAY</p>
            <blockquote className="text-2xl md:text-3xl font-semibold italic text-foreground max-w-3xl mx-auto">
              "Time is what we want most, but what we use worst."
            </blockquote>
            <p className="mt-4 text-muted-foreground text-lg">— William Penn</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-lg text-muted-foreground">Expand your learning with these curated resources</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  YouTube Tutorials
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <CardDescription>
                  Watch expert advice on time management from creators like Thomas Frank and Ali Abdaal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.youtube.com/results?search_query=time+management+for+students" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Explore Videos
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Articles & Guides
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <CardDescription>
                  Read in-depth articles about productivity and effective study habits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.mindtools.com/time-management" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Read Articles
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
