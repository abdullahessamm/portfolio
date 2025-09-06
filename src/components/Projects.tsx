import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SeProject from '@/assets/se-project.jpg';
import C1Project from '@/assets/c1-project.png';
import AMProject from '@/assets/erp-project.png';
import MTCProject from '@/assets/Med Tech Care.png';
import EldabyProject from '@/assets/eldaby-project.png';
import PortfolioProject from '@/assets/this-project.png';

const Projects = () => {
  const projects = [
    {
      title: "Street English Platform",
      description: "A full-stack e-learning solution with modern UI, payment integration, and admin dashboard. Built with Vue.js, Laravel, and MySQL.",
      image: SeProject,
      technologies: ["Vue.js", "Laravel", "MySQL", "PrimeVue", "PrimeFlex"],
      liveUrl: "https://streetenglish.net",
      githubUrl: "https://github.com/abdullahessamm"
    },
    {
      title: "C1 App (Comming Soon)",
      description: "E-learning mobile app with modern UI, payment integration, and admin dashboard — built using React Native, React, Express.js, and MongoDB.",
      image: C1Project,
      technologies: ["React", "React Native", "TypeScript", "Socket.io", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdullahessamm"
    },
    {
      title: "Auto Manage (private app)",
      description: "Simple ERP app built for private orgnization (local system) with modern UI, built using Vue.js, Laravel PHP, and MySQL.",
      image: AMProject,
      technologies: ["Vue.js", "Laravel", "MySQL", "PrimeVue", "PrimeFlex"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdullahessamm"
    },
    {
      title: "MTC (Med Tech Care)",
      description: "Medical devices companies management app (live instance used by a real company) — built with Vue.js, Laravel (PHP), and MySQL.",
      image: MTCProject,
      technologies: ["PrimeVue", "Laravel", "MySQL", "Vue.js", "PrimeFlex"],
      liveUrl: "https://te-group.online",
      githubUrl: "https://github.com/abdullahessamm"
    },
    {
      title: "Eldaby Store (under maintenance)",
      description: "Store application to showcase products and receive client orders — built with Laravel, Livewire, and MySQL.",
      image: EldabyProject,
      technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://eldaby.com",
      githubUrl: "https://github.com/abdullahessamm"
    },
    {
      title: "My Portfolio (this website)",
      description: "This project built for introduce my self, my work and skills. built with React, TypeScript, and Tailwind CSS.",
      image: PortfolioProject,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdullahessamm/portfolio"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card-gradient backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;