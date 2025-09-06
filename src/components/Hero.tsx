import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="container mx-auto px-6 relative flex flex-col items-center z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="text-lg text-primary font-medium">
              Hello, I'm
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Abdullah
              </span>
              <br />
              <span className="text-foreground">Full-Stack Developer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting modern web applications with cutting-edge technologies. 
              Passionate about clean code, user experience, and innovative solutions.
            </p>
            
            <div className="flex justify-center space-x-6 pt-8">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary transition-all duration-300"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;