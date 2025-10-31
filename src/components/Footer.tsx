const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-3">TimeWise</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students to master time management and achieve academic success.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/techniques" className="hover:text-primary transition-colors">Techniques</a></li>
              <li><a href="/tools" className="hover:text-primary transition-colors">Tools</a></li>
              <li><a href="/tips" className="hover:text-primary transition-colors">Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.youtube.com/results?search_query=time+management+for+students" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  YouTube Tutorials
                </a>
              </li>
              <li>
                <a 
                  href="https://www.mindtools.com/time-management" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Time Management Articles
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Time Management for Students. Created as an educational project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;