
import React from 'react';
import SectionTitle from './shared/SectionTitle';
import AnimatedReveal from './shared/AnimatedReveal';
import { Chip } from './ui/chip';

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['C#', 'Java', 'JavaScript', 'HTML & CSS', 'SQL']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['.NET MVC', 'React', 'Azure']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Docker', 'API Development', 'Debugging & Testing']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A showcase of my technical skills and areas of expertise in software development and support."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedReveal key={index} animation="fade-up" delay={100 + index * 100}>
              <div className="glass p-6 rounded-xl h-full flex flex-col">
                <h3 className="text-lg font-medium mb-4 relative pb-2">
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary/50 rounded-full"></span>
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <Chip 
                      key={idx} 
                      variant="skill" 
                      size="default"
                      className="mb-2"
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
        
        {/* Skill Bars */}
        <div className="mt-16">
          <AnimatedReveal animation="fade-up" delay={300}>
            <h3 className="text-lg font-medium mb-8 text-center">Proficiency Levels</h3>
          </AnimatedReveal>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: 'C# / .NET', percentage: 85 },
              { name: 'JavaScript / React', percentage: 75 },
              { name: 'SQL', percentage: 90 },
              { name: 'HTML & CSS', percentage: 80 },
              { name: 'Docker / Cloud', percentage: 70 }
            ].map((skill, index) => (
              <AnimatedReveal key={index} animation="fade-up" delay={400 + index * 50}>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                      style={{ 
                        width: `${skill.percentage}%`,
                        transition: 'width 1.5s ease-out' 
                      }}
                    ></div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
