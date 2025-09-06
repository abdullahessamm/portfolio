import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "TypeScript", "Vue.js", "HTML5", "CSS3", 
        "Tailwind CSS", "SASS", "JavaScript", "jQuery"
      ]
    },
    {
      title: "Backend", 
      skills: [
        "Node.js", "Express.js", "Python", "PHP", "Laravel",
        "REST APIs", "GraphQL", "Microservices", "Socket.io"
      ]
    },
    {
      title: "Database",
      skills: [
        "MySQL", "MongoDB", "Redis", 
        "Firebase", "Database Design"
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="bg-hero-gradient bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 bg-card/50 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:shadow-glow-primary hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;