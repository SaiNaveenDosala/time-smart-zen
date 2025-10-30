import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TimeWise - Time Management for Students</p>
          <p className="mt-2 text-sm">Built with dedication to help students succeed</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
