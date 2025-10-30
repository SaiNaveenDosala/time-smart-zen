import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Target, TrendingUp, Calendar } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="Master Your Time. Master Your Life."
        subtitle="Discover proven time management techniques designed specifically for students to balance academics, activities, and personal growth."
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

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold italic text-foreground max-w-3xl mx-auto">
            "Time is what we want most, but what we use worst."
          </blockquote>
          <p className="mt-4 text-muted-foreground text-lg">— William Penn</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
