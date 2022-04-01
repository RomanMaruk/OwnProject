import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealCategoriesModel } from 'src/app/model/meal/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealDBService {

  constructor(private http: HttpClient) { }

  getAllMealCategories(): Observable<MealCategoriesModel> {
    const url = 'https://themealdb.com/api/json/v1/1/categories.php'
    return this.http.get<MealCategoriesModel>(url)
  }
}
