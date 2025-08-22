import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Users, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import restaurantHero from "@/assets/restaurant-hero.jpg";
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import freshSalad from "@/assets/fresh-salad.jpg";

const Index = () => {
  const featuredItems = [
    { name: "Margherita Pizza", price: "$14.99", image: margheritaPizza },
    { name: "Grilled Chicken", price: "$18.99", image: grilledChicken },
    { name: "Fresh Garden Salad", price: "$9.99", image: freshSalad },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={restaurantHero}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-restaurant-warm bg-clip-text text-transparent">
            TasteBud
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience culinary excellence with our handcrafted dishes made from the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-restaurant-accent hover:bg-restaurant-accent/90 text-white">
              <Link to="/menu">
                Explore Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-primary">
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-primary">Why Choose TasteBud?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing an exceptional dining experience with quality, service, and ambiance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 hover:border-restaurant-accent transition-colors">
              <CardContent className="pt-6">
                <ChefHat className="h-12 w-12 text-restaurant-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-restaurant-primary">Expert Chefs</h3>
                <p className="text-muted-foreground">Our experienced chefs craft each dish with passion and precision</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-restaurant-accent transition-colors">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-restaurant-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-restaurant-primary">Fresh Ingredients</h3>
                <p className="text-muted-foreground">Daily sourced fresh ingredients for the best taste and quality</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 hover:border-restaurant-accent transition-colors">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-restaurant-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-restaurant-primary">Great Service</h3>
                <p className="text-muted-foreground">Friendly staff dedicated to making your dining experience memorable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-restaurant-warm/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-restaurant-primary">Featured Dishes</h2>
            <p className="text-lg text-muted-foreground">
              Taste our most popular and chef-recommended dishes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-warm transition-all duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-restaurant-accent">
                    Popular
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <span className="text-lg font-bold text-restaurant-accent">{item.price}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-restaurant-gold text-restaurant-gold" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(4.8)</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-restaurant-accent hover:bg-restaurant-accent/90">
              <Link to="/menu">
                View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-restaurant-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Taste the Best?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers and experience our culinary excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-primary">
              <Link to="/menu">Browse Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
