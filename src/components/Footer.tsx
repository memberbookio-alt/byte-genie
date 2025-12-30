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
          <div className="flex items-center gap-3">
            <span className="accent-dot" />
            <span className="text-lg font-bold tracking-tight">
              BYTE GENIE
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
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
            © {new Date().getFullYear()} BYTE GENIE. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
