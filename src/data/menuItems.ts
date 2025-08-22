import margheritaPizza from "@/assets/margherita-pizza.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";
import freshSalad from "@/assets/fresh-salad.jpg";
import creamyPasta from "@/assets/creamy-pasta.jpg";
import beefBurger from "@/assets/beef-burger.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil leaves on a crispy wood-fired base",
    price: 14.99,
    image: margheritaPizza,
    isVeg: true,
    category: "Pizza"
  },
  {
    id: 2,
    name: "Grilled Chicken Breast",
    description: "Succulent grilled chicken breast seasoned with herbs, served with roasted vegetables",
    price: 18.99,
    image: grilledChicken,
    isVeg: false,
    category: "Main Course"
  },
  {
    id: 3,
    name: "Garden Fresh Salad",
    description: "Mixed greens, cherry tomatoes, cucumbers, bell peppers with house vinaigrette",
    price: 9.99,
    image: freshSalad,
    isVeg: true,
    category: "Salads"
  },
  {
    id: 4,
    name: "Creamy Mushroom Pasta",
    description: "Fresh fettuccine pasta in rich mushroom cream sauce with parmesan and herbs",
    price: 16.99,
    image: creamyPasta,
    isVeg: true,
    category: "Pasta"
  },
  {
    id: 5,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce",
    price: 13.99,
    image: beefBurger,
    isVeg: false,
    category: "Burgers"
  },
  {
    id: 6,
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy quinoa bowl with roasted vegetables, olives, feta cheese, and tahini dressing",
    price: 12.99,
    image: freshSalad,
    isVeg: true,
    category: "Healthy"
  }
];