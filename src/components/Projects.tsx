import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Dumbbell, Coffee } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "7 Minutes Workout App",
      description: "Developed a fitness app that guides users through a scientifically-backed 7-minute full-body workout routine with exercise timers, progress tracking, and audio cues.",
      icon: Dumbbell,
      features: [
        "Clean, user-friendly interface using Android Jetpack components",
        "Exercise timers with visual and audio cues",
        "Progress tracking and workout history",
        "Responsive design for various screen sizes"
      ],
      technologies: ["Kotlin", "XML", "Jetpack Compose", "Android SDK"],
      gradient: "from-primary to-tech-cyan",
      type: "Mobile App"
    },
    {
      title: "Coffee Shop App",
      description: "Built a coffee ordering app with features like user login, dynamic menu, cart functionality, order history, and store locator using modern Android development practices.",
      icon: Coffee,
      features: [
        "User authentication and profile management",
        "Dynamic menu with cart and order history",
        "Firebase backend integration",
        "Google Maps integration for store locations"
      ],
      technologies: ["Kotlin", "Firebase", "Jetpack Compose", "Google Maps API"],
      gradient: "from-accent to-tech-purple",
      type: "Mobile App"
    }
  ];

  const additionalProjects = [
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      type: "Web App"
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with real-time updates",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      type: "Web App"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      type: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, from mobile applications to web solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1 border-primary/30 text-primary text-xs">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-sm text-accent mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="group border-primary/30 hover:border-primary hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      Source Code
                    </Button>
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      <Smartphone className="mr-2 h-4 w-4" />
                      View Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other <span className="text-accent">Projects</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="mt-1 border-accent/30 text-accent text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-secondary/80 hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button size="sm" variant="ghost" className="w-full group hover:bg-primary/10 hover:text-primary">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;