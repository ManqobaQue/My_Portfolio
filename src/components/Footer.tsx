
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-semibold tracking-tight mb-1">
              M<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Senior Application Support Analyst transitioning into Fullstack Web Development. Passionate about creating efficient, scalable applications.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ManqobaQue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border text-foreground/70 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/manqoba-mavimbela-48b067163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border text-foreground/70 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:Manqoba664@gmail.com" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-border text-foreground/70 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Manqoba Mavimbela. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#experience" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
