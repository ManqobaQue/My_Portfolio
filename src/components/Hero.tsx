
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedReveal from './shared/AnimatedReveal';

const Hero: React.FC = () => {
  const profileImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (profileImgRef.current) {
      profileImgRef.current.classList.add('loading');
      
      const img = new Image();
      img.src = "https://media.licdn.com/dms/image/v2/D4D03AQFw-CoWTWOuwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698767810278?e=1743638400&v=beta&t=n3hrp8CDwBnayC_7rO7HKz39EOvR8HA3fqcF1w04xug";
      
      img.onload = () => {
        if (profileImgRef.current) {
          profileImgRef.current.classList.remove('loading');
        }
      };
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container-custom flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 md:pr-8">
          <AnimatedReveal animation="fade-up" delay={100}>
            <span className="inline-block text-sm font-medium text-primary mb-2 tracking-wide">
              Hello, I'm
            </span>
          </AnimatedReveal>
          
          <AnimatedReveal animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Manqoba Mavimbela
            </h1>
          </AnimatedReveal>
          
          <AnimatedReveal animation="fade-up" delay={300}>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-normal">
              Senior Application Support Analyst &
              <br />
              Aspiring Fullstack Developer
            </h2>
          </AnimatedReveal>
          
          <AnimatedReveal animation="fade-up" delay={400}>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              Passionate about creating efficient, scalable applications using C#, .NET, 
              JavaScript, and modern web technologies.
            </p>
          </AnimatedReveal>
          
          <AnimatedReveal animation="fade-up" delay={500}>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="px-6 py-3 bg-secondary text-foreground rounded-full hover:bg-secondary/70 transition-colors"
              >
                View Experience
              </a>
            </div>
          </AnimatedReveal>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <AnimatedReveal animation="scale-in" delay={300}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 blur-2xl opacity-70 animate-spin-slow" />
              <img
                ref={profileImgRef}
                src="https://media.licdn.com/dms/image/v2/D4D03AQFw-CoWTWOuwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698767810278?e=1743638400&v=beta&t=n3hrp8CDwBnayC_7rO7HKz39EOvR8HA3fqcF1w04xug"
                alt="Manqoba Mavimbela"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl object-cover relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-8 border-primary/10 animate-pulse" />
            </div>
          </AnimatedReveal>
        </div>
      </div>
      
      <a
        href="#experience"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:opacity-70 transition-opacity"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
