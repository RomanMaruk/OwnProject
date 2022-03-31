import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealDBService } from 'src/app/services/mealServices/meal-db.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  categoriesOfMeal: any
   = []

  constructor(private getMealServices: MealDBService) { }

  ngOnInit(): void {
    this.getMealServices.getAllMealCategories().subscribe(res => {
      this.categoriesOfMeal = res.categories
      console.log(this.categoriesOfMeal);
      
    })
  }

}
