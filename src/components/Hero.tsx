import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-tech-cyan rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Harshit Sonker
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full-Stack Developer & Mobile App Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Computer Science Engineering student passionate about building innovative web applications 
              and mobile solutions. Experienced in React, Node.js, Kotlin, and modern development practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group border-primary/30 hover:border-primary hover:bg-primary/10">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://github.com/harshitsonker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://linkedin.com/in/harshitsonker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a 
              href="https://leetcode.com/harshitsonker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary hover:shadow-glow transition-all duration-300 group"
            >
              <Code className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;