import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Java", "Python", "Kotlin", "HTML", "CSS", "JavaScript", "XML", "TypeScript"],
      gradient: "from-primary to-tech-cyan"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["React", "Node.js", "TensorFlow", "NumPy", "Android SDK", "Jetpack Compose"],
      gradient: "from-accent to-tech-purple"
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: ["VS Code", "IntelliJ IDEA", "Android Studio", "Git", "GitHub", "SQL", "MongoDB", "Firebase"],
      gradient: "from-tech-cyan to-primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Public Speaking", "Problem-Solving", "Communication", "Adaptability", "Team Collaboration"],
      gradient: "from-tech-purple to-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}>
                        <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
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
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Programming Languages Progress */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Proficiency <span className="text-primary">Highlights</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: "JavaScript/React", level: 90 },
              { skill: "Java", level: 85 },
              { skill: "Kotlin/Android", level: 80 },
              { skill: "Python", level: 75 },
              { skill: "Node.js", level: 85 },
              { skill: "Database Design", level: 80 }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;