import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealCategoriesModel, MealsFilteredByCategoryModel } from 'src/app/model/meal/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealDBService {

  constructor(private http: HttpClient) { }

  getAllMealCategories(): Observable<MealCategoriesModel> {
    const url = 'https://themealdb.com/api/json/v1/1/categories.php'
    return this.http.get<MealCategoriesModel>(url)
  }

  filteredByCategory(category: string): Observable<MealsFilteredByCategoryModel> {
    const url = `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    return this.http.get<MealsFilteredByCategoryModel>(url)
  }

  fullMeal(idMeal: number): Observable<any> {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    return this.http.get(url)
  }
}
