import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealDBService {

  constructor(private http: HttpClient) { }

  getAllMealCategories(): Observable<any> {
    const url = 'https://themealdb.com/api/json/v1/1/categories.php'
    return this.http.get(url)
  }
}
