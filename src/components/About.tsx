import { Code2, Database, Globe, Smartphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern React, vue.js, TypeScript, and cutting-edge UI frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Scalable APIs, databases, and cloud infrastructure"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Full-stack solutions from concept to deployment"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Responsive design optimized for all devices"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love building scalable applications that solve real-world problems and deliver 
            exceptional user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card-gradient backdrop-blur-sm border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I studied Communications Engineering, but my passion for programming started in 2019. I grew into a full-stack developer working with Laravel and Express.js. Recently, together with a partner, I co-founded Swift Care, a company that provides programming and medical devices services.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Front-End Development</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-hero-gradient h-2 rounded-full w-[95%] transition-all duration-1000"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Laravel (Back-End)</span>
                  <span className="text-primary">93%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-hero-gradient h-2 rounded-full w-[93%] transition-all duration-1000"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Express js (Back-End)</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-hero-gradient h-2 rounded-full w-[90%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;