import { Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="font-serif text-2xl font-bold text-foreground">
            Ali Yildiz
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/yildizalicom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@aliyildiz.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
