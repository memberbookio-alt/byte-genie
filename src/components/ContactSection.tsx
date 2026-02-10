import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const sheetEndpoint = import.meta.env.VITE_GOOGLE_SHEET_WEBAPP_URL;

    try {
      if (!sheetEndpoint) {
        throw new Error("Missing Google Sheets endpoint");
      }

      const payload = {
        ...formData,
        source: "landing-contact",
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(sheetEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast({
        title: "Enquiry submitted",
        description: "We've logged your details and will get back to you within 24 hours.",
        variant: "success",
      });
      setFormData({ name: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-secondary/30 p-8 sm:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="section-label mb-6">WORK WITH US TODAY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to{" "}
                <span className="font-serif italic font-normal text-muted-foreground block">
                  Ship?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Dive into the future with Byte Genie. Get in touch and build out 
                software that drives revenue for your business.
              </p>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute bottom-8 right-8">
              <span className="accent-dot animate-glow-pulse" />
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  maxLength={100}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none text-sm sm:text-base"
                />
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                variant="submit" 
                size="xl"
                disabled={isSubmitting}
                className="group"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
