
import React, { useState } from 'react';
import SectionTitle from './shared/SectionTitle';
import AnimatedReveal from './shared/AnimatedReveal';
import { Github, ExternalLink } from 'lucide-react';
import { Chip } from './ui/chip';

const projectsData = [
  {
    title: 'Phone Book App',
    description: 'Built using the ASP.NET Core MVC (Model-View-Controller) architecture in C# with Razor Pages / Blazor for UI. Deployed using Azure App Service and Docker.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    tags: ['C#', '.NET Core', 'MVC', 'Blazor', 'Azure', 'Docker'],
    links: {
      github: 'https://github.com/ManqobaQue',
      live: 'https://manqobaque.github.io/User_Profile/Profile.html.html'
    }
  },
  {
    title: 'To-Do List App',
    description: 'A simple yet effective task management application designed to improve productivity with a clean, user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    tags: ['JavaScript', 'React', 'CSS', 'Local Storage'],
    links: {
      github: 'https://github.com/ManqobaQue',
      live: 'https://manqobaque.github.io/User_Profile/Profile.html.html'
    }
  }
];

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gradient-to-b from-white to-secondary/20">
      <div className="container-custom">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent projects showcasing my skills and expertise in software development."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedReveal key={index} animation="fade-up" delay={100 + index * 100}>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border h-full flex flex-col transition-all duration-300 hover:shadow-md"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} variant="skill" size="sm">{tag}</Chip>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto pt-2">
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        
        <AnimatedReveal animation="fade-up" delay={300} className="mt-12 text-center">
          <a 
            href="https://github.com/ManqobaQue" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
};

export default Projects;
