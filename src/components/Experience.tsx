import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Android-Kotlin Development Trainee",
      company: "Udemy",
      location: "Ghaziabad",
      period: "February 2025 - Present",
      type: "Training",
      description: "Gained hands-on experience building Android applications using Kotlin, Jetpack Compose, XML and MVVM architecture.",
      achievements: [
        "Worked on API integration, UI/UX design, Firebase, and local data storage",
        "Developed mobile applications with modern Android development practices",
        "Implemented clean architecture patterns and best practices"
      ],
      skills: ["Kotlin", "Android SDK", "Jetpack Compose", "Firebase", "MVVM"]
    },
    {
      title: "Full-Stack Web Development Trainee",
      company: "CodSoft",
      location: "Ghaziabad",
      period: "October 2023 - November 2023",
      type: "Internship",
      description: "Built and deployed full-stack web applications using React.js, Node.js, and MongoDB with responsive front-end interfaces.",
      achievements: [
        "Developed complete web applications with HTML, CSS, and JavaScript",
        "Integrated RESTful APIs and adhered to Agile methodologies",
        "Collaborated in a team environment, improving code quality through version control (Git)"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  const certifications = [
    {
      title: "Web Development",
      issuer: "CODSOFT",
      year: "2023",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Android 14 App Development",
      issuer: "Udemy",
      year: "2025",
      skills: ["Kotlin", "Android Studio", "Firebase"]
    },
    {
      title: "Java Concepts",
      issuer: "Infosys",
      year: "2024",
      skills: ["Java", "OOP", "Data Structures"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional training and hands-on experience in modern software development.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Professional <span className="text-primary">Experience</span>
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">{exp.title}</h4>
                        <h5 className="text-lg font-medium mb-2">{exp.company}</h5>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h6 className="font-medium text-sm text-accent">Key Achievements:</h6>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="text-accent">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <p className="text-accent text-sm font-medium">{cert.year}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-secondary/80 hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;