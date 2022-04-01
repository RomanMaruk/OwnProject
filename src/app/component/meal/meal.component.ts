import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MealCategoriesInterface } from 'src/app/model/meal/meal.interface';
import { MealCategoriesAction } from 'src/app/store/meal/meal.action';
import { MealState } from 'src/app/store/meal/meal.state';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  @Select(MealState.mealCategories)
  mealCategories$: Observable<MealCategoriesInterface[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new MealCategoriesAction())
  }

  takeCategories(filterCategories: MealCategoriesInterface) {
    console.log(filterCategories.strCategory);
    
  }

}
