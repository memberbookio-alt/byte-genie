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
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="order-1 flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <img
                src="/images/logos/logo-transparent.png"
                alt="Byte Genie logo"
                className="h-10 w-10 object-contain drop-shadow-sm"
              />
              <span className="text-lg font-bold tracking-tight">
                Byte Genie
              </span>
            </a>
          </div>

          {/* Links */}
          <nav className="order-2 flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-8 text-xs sm:text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="order-3 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Byte Genie Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
