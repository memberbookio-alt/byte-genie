import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 border-t border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/logos/logo-transparent.png"
              alt="Byte Genie logo"
              className="h-10 w-10 object-contain drop-shadow-sm"
            />
            <span className="text-lg font-bold tracking-tight">
              BYTE GENIE
            </span>
          </a>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#why-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BYTE GENIE TECHNOLOGIES. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
