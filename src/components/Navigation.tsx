import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BookOpen, Wrench, Lightbulb, Info, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/techniques", label: "Techniques", icon: BookOpen },
    { path: "/tools", label: "Tools", icon: Wrench },
    { path: "/tips", label: "Tips", icon: Lightbulb },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
        : "bg-background/80 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-2xl transition-transform group-hover:scale-110 group-hover:rotate-12">
              ⏰
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              TimeWise
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative"
                >
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    active 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                    <Icon className={`h-4 w-4 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110 group-hover:-translate-y-1"
                    }`} />
                    <span>{item.label}</span>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:rotate-180 transition-transform duration-500"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="transition-transform hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                    active 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
