import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menu: MenuItem[] = [
    {name: "Chicken Fingers", category: "dinner", price: 11.99},
    {name: "Pizza", category: "dinner", price: 11.99},
    {name: "Wings", category: "sides", price: 8.99},
    {name: "Breadsticks", category: "sides", price: 4.99},
    {name: "Ceasar Salad", category: "salads", price: 5.99},
    {name: "Cinnamon Roll", category: "desert", price: 8.99}
  ];

  category = 'dinner';
  
 // mealsForCategory: string[] = getMealsByCategory(this.menu, this.category)
  
  
}
