import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menuItems";
import { Leaf, Drumstick } from "lucide-react";

const Menu = () => {
  const [filter, setFilter] = useState<"all" | "veg" | "non-veg">("all");

  const filteredItems = menuItems.filter(item => {
    if (filter === "veg") return item.isVeg;
    if (filter === "non-veg") return !item.isVeg;
    return true;
  });

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-restaurant-primary">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-restaurant-accent hover:bg-restaurant-accent/90" : ""}
          >
            All Items
          </Button>
          <Button
            variant={filter === "veg" ? "default" : "outline"}
            onClick={() => setFilter("veg")}
            className={filter === "veg" ? "bg-restaurant-green hover:bg-restaurant-green/90" : ""}
          >
            <Leaf className="w-4 h-4 mr-2" />
            Vegetarian
          </Button>
          <Button
            variant={filter === "non-veg" ? "default" : "outline"}
            onClick={() => setFilter("non-veg")}
            className={filter === "non-veg" ? "bg-restaurant-accent hover:bg-restaurant-accent/90" : ""}
          >
            <Drumstick className="w-4 h-4 mr-2" />
            Non-Vegetarian
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <MenuCard key={item.id} {...item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No items found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;