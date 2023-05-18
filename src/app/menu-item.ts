export interface MenuItem {
    name: string;
    category: string;
    price: number;
}

/*
function getMealsByCategory(menu: MenuItem[], category: string): string[] {
    const meals: string[] = [];
  
    for (const item of menu) {
      if (item.category.toLowerCase() === category.toLowerCase()) {
        meals.push(item.name);
      }
    }
  
    return meals;
}  
  */
