import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in computer science and hands-on experience 
            in full-stack development and mobile app development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Get to Know Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student at Ajay Kumar Garg Engineering College with a 
                strong academic background and practical experience in software development. My journey 
                in tech has been driven by curiosity and a passion for solving real-world problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in full-stack web development and Android app development, 
                I enjoy working with modern technologies like React, Node.js, Kotlin, and various databases. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm">Available for Work</span>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Current Education</h4>
                    <h5 className="text-primary font-medium mb-1">
                      Bachelor of Technology - Computer Science & Engineering
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ajay Kumar Garg Engineering College
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>CGPA: 7.5</span>
                      <span>Nov 2022 - July 2026</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Academic Excellence</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Class 12 (ISC)</span>
                        <span className="text-accent font-medium">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Class 10 (ICSE)</span>
                        <span className="text-accent font-medium">89%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Seth Anandram Jaipuria School, Kanpur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;