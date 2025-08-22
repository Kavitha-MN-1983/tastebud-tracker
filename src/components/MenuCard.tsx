import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Drumstick, Plus } from "lucide-react";

interface MenuCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
}

const MenuCard = ({ name, description, price, image, isVeg, category }: MenuCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-warm hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className={`${isVeg ? 'bg-restaurant-green' : 'bg-restaurant-accent'} text-white`}>
            {isVeg ? <Leaf className="w-3 h-3 mr-1" /> : <Drumstick className="w-3 h-3 mr-1" />}
            {isVeg ? 'Veg' : 'Non-Veg'}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/90">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-restaurant-primary group-hover:text-restaurant-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-bold text-restaurant-accent">
              ${price.toFixed(2)}
            </span>
            <Button size="sm" className="bg-restaurant-accent hover:bg-restaurant-accent/90">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;