import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const FeatureCard = ({ icon: Icon, title, description, children }: FeatureCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader>
        <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
};

export default FeatureCard;
