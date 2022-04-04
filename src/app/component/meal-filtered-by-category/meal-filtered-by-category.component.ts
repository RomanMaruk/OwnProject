import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MealsFilteredByCategoryInterface } from 'src/app/model/meal/meal.interface';
import { FullMealAction } from 'src/app/store/meal/meal.action';
import { MealState } from 'src/app/store/meal/meal.state';
import { RequestDataState } from 'src/app/store/requst-data.state';

@Component({
  selector: 'app-meal-filtered-by-category',
  templateUrl: './meal-filtered-by-category.component.html',
  styleUrls: ['./meal-filtered-by-category.component.scss']
})
export class MealFilteredByCategoryComponent implements OnInit {

  @Select(MealState.mealFilteredByCategory)
  mealFilteredByCategory$: Observable<MealsFilteredByCategoryInterface[]>
  @Select(RequestDataState.getHeader)
  title$: Observable<string>
  constructor(private store: Store, private routs: Router) { }

  ngOnInit(): void {
    console.log('Routes ', this.routs.url);
    
  }

  fullMeal(id: number) {
    this.store.dispatch(new FullMealAction(id))
      .subscribe(res => {
        this.routs.navigate([this.routs.url, id])
      })
  }

}
