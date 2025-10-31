import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import FloatingHelper from "./FloatingHelper";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingHelper />
    </div>
  );
};

export default Layout;
