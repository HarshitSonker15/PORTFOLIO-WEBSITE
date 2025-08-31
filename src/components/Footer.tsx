import { Github, Linkedin, Code, Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Harshit Sonker
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer & Mobile App Developer passionate about creating 
              innovative solutions and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
                { label: "Resume", href: "#" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:harshitsonker15@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                harshitsonker15@gmail.com
              </a>
              <a 
                href="tel:+917275344665"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                +91-7275344665
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://github.com/HarshitSonker15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-sonker-b4a3a0258" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://leetcode.com/u/Harshit_Sonker/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <Code className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Harshit Sonker. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
            and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;