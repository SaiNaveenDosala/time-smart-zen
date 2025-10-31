import FeatureCard from "@/components/FeatureCard";
import { Brain, Target, TrendingUp, Calendar, Timer, BookOpen, Lightbulb, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Abstract Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Cute Character - Timmy the Clock */}
        <div className="absolute top-8 right-8 text-6xl animate-wave hidden md:block">
          ⏰
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master Your Time. Master Your Life.
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover proven time management techniques designed specifically for students to balance academics, activities, and personal growth.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/techniques">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group shadow-lg hover:shadow-xl transition-all"
                >
                  Learn Techniques
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/tools">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group shadow-lg hover:shadow-xl transition-all bg-white/10 border-white/20 hover:bg-white/20"
                >
                  Explore Tools
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <style>{`
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            75% { transform: rotate(-15deg); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-wave {
            animation: wave 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          {/* Cute Character - Lumi the Book */}
          <div className="absolute top-0 right-4 text-5xl animate-bounce hidden md:block">
            📚
          </div>
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

      <section className="py-16 relative">
        {/* Cute Character - Sunny the Timer */}
        <div className="absolute top-8 left-8 text-5xl animate-pulse hidden md:block">
          ☀️
        </div>
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

      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        {/* Cute Character - Moti the Star */}
        <div className="absolute top-4 right-12 text-4xl animate-spin-slow hidden md:block">
          ⭐
        </div>
        <div className="absolute bottom-8 left-12 text-3xl animate-spin-slow hidden md:block" style={{ animationDelay: '1s' }}>
          ✨
        </div>
        
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
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
