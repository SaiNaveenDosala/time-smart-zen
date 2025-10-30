import Hero from "@/components/Hero";
import { AlertCircle, BookOpen, Users } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero 
        title="About This Project"
        subtitle="Empowering students with practical time management strategies"
        showCta={false}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This website was created to help students navigate the challenges of balancing academics, 
              extracurricular activities, and personal life. We believe that effective time management 
              is a skill that can be learned and mastered with the right guidance and tools.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Time Management?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In today's fast-paced academic environment, students face multiple demands on their time. 
              Poor time management leads to stress, missed deadlines, and reduced academic performance. 
              This platform provides practical, actionable strategies to help you take control of your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon={AlertCircle}
              title="Common Challenges"
              description="Procrastination, distractions, and overwhelming workloads"
            />
            <FeatureCard
              icon={BookOpen}
              title="Proven Methods"
              description="Research-backed techniques used by successful students"
            />
            <FeatureCard
              icon={Users}
              title="For Students"
              description="Designed specifically for academic environments"
            />
          </div>

          <div className="mt-16 p-8 bg-secondary/50 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4">About the Creator</h3>
            <p className="text-muted-foreground leading-relaxed">
              This website was developed as an educational project to demonstrate how digital platforms 
              can be leveraged to create meaningful educational resources. The goal is to combine design 
              thinking, educational content, and user experience to help students improve their productivity 
              and achieve their academic goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
