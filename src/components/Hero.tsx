import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
}

const Hero = ({ title, subtitle, ctaText = "Explore Techniques", ctaLink = "/techniques", showCta = true }: HeroProps) => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          {showCta && (
            <div className="pt-4">
              <Link to={ctaLink}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group shadow-lg hover:shadow-xl transition-all"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
