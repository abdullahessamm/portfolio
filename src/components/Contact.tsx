import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abdoessam.2010@gmail.com",
      link: "mailto:abdoessam.2010@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(+20) 1505715089",
      link: "tel:+201505715089"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "https://www.google.com/maps/place/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AC%E2%80%AD/@30.0595563,31.2996639,13z/data=!3m1!4b1!4m6!3m5!1s0x14583fa60b21beeb:0x79dfb296e8423bba!8m2!3d30.0444196!4d31.2357116!16zL20vMDF3MnY?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently available for freelance work and open to discussing new opportunities. 
                Whether you have a project in mind or just want to chat about tech, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <a 
                    href={item.link}
                    className="flex items-center space-x-4 group"
                    target='_blank'
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient backdrop-blur-sm border border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project Inquiry"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;