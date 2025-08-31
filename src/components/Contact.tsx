import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshitsonker15@gmail.com",
      href: "mailto:harshitsonker15@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7275344665",
      href: "tel:+917275344665"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/HarshitSonker15",
      username: "@HarshitSonker15"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harshitsonker",
      username: "harshitsonker"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/harshitsonker",
      username: "harshitsonker"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={item.label}
                    className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <a 
                        href={item.href}
                        className="flex items-center gap-4 group-hover:text-primary transition-colors duration-200"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Find me on</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Card 
                      key={social.label}
                      className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
                    >
                      <CardContent className="p-4">
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center text-center space-y-2 group-hover:text-primary transition-colors duration-200"
                        >
                          <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <p className="font-medium text-sm">{social.label}</p>
                            <p className="text-xs text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Download Resume */}
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-lg">Download My Resume</h4>
                  <p className="text-muted-foreground text-sm">
                    Get a comprehensive overview of my skills, experience, and projects.
                  </p>
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Send me a <span className="text-primary">Message</span>
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your full name"
                        className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;