
import React from 'react';
import SectionTitle from './shared/SectionTitle';
import AnimatedReveal from './shared/AnimatedReveal';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Interested in working together? Feel free to reach out through any of the following channels."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedReveal animation="fade-up" delay={100}>
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:Manqoba664@gmail.com" 
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border group hover:border-primary/30 transition-all"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                    <p className="text-base">Manqoba664@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+27698208724" 
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border group hover:border-primary/30 transition-all"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                    <p className="text-base">(+27) 69 820 8724</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/manqoba-mavimbela-48b067163" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border group hover:border-primary/30 transition-all"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h4>
                    <p className="text-base truncate">Manqoba Mavimbela</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
                </a>
                
                <a 
                  href="https://github.com/ManqobaQue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border group hover:border-primary/30 transition-all"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">GitHub</h4>
                    <p className="text-base truncate">ManqobaQue</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
                </a>
              </div>
            </AnimatedReveal>
            
            <AnimatedReveal animation="fade-up" delay={200}>
              <div className="mt-8">
                <a 
                  href="/Manqoba_Resume.pdf" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/70 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </AnimatedReveal>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedReveal animation="fade-up" delay={300}>
              <form className="glass p-8 rounded-xl">
                <h3 className="text-xl font-medium mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
