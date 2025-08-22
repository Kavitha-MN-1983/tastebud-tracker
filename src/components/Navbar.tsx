import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ChefHat, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-restaurant-accent" />
          <span className="text-xl font-bold text-restaurant-primary">TasteBud</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-restaurant-accent ${
              isActive("/") ? "text-restaurant-accent" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`text-sm font-medium transition-colors hover:text-restaurant-accent ${
              isActive("/menu") ? "text-restaurant-accent" : "text-foreground"
            }`}
          >
            Menu
          </Link>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="default" asChild className="bg-restaurant-accent hover:bg-restaurant-accent/90">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-sm font-medium hover:text-restaurant-accent"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block text-sm font-medium hover:text-restaurant-accent"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <div className="pt-2 space-y-2">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
              <Button variant="default" asChild className="w-full justify-start bg-restaurant-accent hover:bg-restaurant-accent/90">
                <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;