import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <span className="accent-dot mb-6 block mx-auto" />
        <h1 className="mb-4 text-8xl font-bold">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! This page doesn't exist.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
