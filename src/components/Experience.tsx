
import React from 'react';
import SectionTitle from './shared/SectionTitle';
import AnimatedReveal from './shared/AnimatedReveal';
import { Chip } from './ui/chip';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    title: 'Senior Application Support Analyst',
    company: 'BET Software',
    period: '2024 - Present',
    description: `Collaborated with development teams to troubleshoot complex issues, modifying code to address bugs and conducting thorough testing before deployment. Supported software deployments and rollbacks, performing impact analysis for software changes. Developed documentation and shared technical knowledge with team members, improving support processes and quality.`,
    skills: ['Debugging', 'Deployment', 'Documentation', 'Technical Support']
  },
  {
    title: 'Senior Support Engineer',
    company: 'Mr. Price Group',
    period: '2022 - 2024',
    description: `Provided application and system support, troubleshooting enterprise applications, managing SQL databases, and ensuring system performance using Grafana, Dynatrace, and SolarWinds. Collaborated with developers and IT teams to resolve incidents, optimize workflows, and implement ITIL best practices.`,
    skills: ['SQL', 'System Performance', 'ITIL', 'Incident Management']
  }
];

const educationData = [
  {
    degree: 'Bachelor of Software Development',
    institution: 'Durban University of Technology',
    period: '2018 - 2022',
    description: 'Focused on software engineering principles, data structures, algorithms, backend development, and database systems. Completed practical projects in various programming languages and frameworks.',
    coursework: ['Data Structures', 'Algorithms', 'Backend Development', 'Database Systems', 'Software Engineering']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="container-custom">
        <SectionTitle 
          title="Experience & Education" 
          subtitle="My professional journey and educational background that have shaped my career in technology."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <AnimatedReveal animation="fade-up" delay={100}>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Work Experience
              </h3>
            </AnimatedReveal>
            
            <div className="space-y-8">
              {experienceData.map((job, index) => (
                <AnimatedReveal key={index} animation="fade-up" delay={200 + index * 100}>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="text-lg font-medium">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                      <span className="text-sm text-primary font-medium">{job.company}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Chip key={idx} variant="skill" size="sm">{skill}</Chip>
                      ))}
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <AnimatedReveal animation="fade-up" delay={100}>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">
                  <GraduationCap size={16} />
                </span>
                Education
              </h3>
            </AnimatedReveal>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <AnimatedReveal key={index} animation="fade-up" delay={200 + index * 100}>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                      <span className="text-sm text-primary font-medium">{edu.institution}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
                    <div className="mt-3">
                      <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <BookOpen size={14} className="text-primary" />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <Chip key={idx} variant="skill" size="sm">{course}</Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
            
            {/* Certifications */}
            <AnimatedReveal animation="fade-up" delay={300}>
              <h3 className="text-xl font-semibold mb-6 mt-12 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">
                  <Award size={16} />
                </span>
                Certifications
              </h3>
            </AnimatedReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AnimatedReveal animation="fade-up" delay={400}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">Java Programming</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={450}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">C#</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={500}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">Oracle SQL Server</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={550}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">Advanced SQL Server</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={600}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">Azure</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={650}>
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">PowerShell</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
              
              <AnimatedReveal animation="fade-up" delay={700} className="sm:col-span-2">
                <div className="glass p-4 rounded-lg shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="text-sm font-medium">Software Testing</div>
                  <div className="text-xs text-muted-foreground">Udemy</div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
