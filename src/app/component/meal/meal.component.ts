import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MealCategoriesInterface } from 'src/app/model/meal/meal.interface';
import { appState } from 'src/app/store/app.state';
import { MealCategoriesAction, MealFilteredByCategoryAction } from 'src/app/store/meal/meal.action';
import { MealState } from 'src/app/store/meal/meal.state';
import { GetHeaderAction } from 'src/app/store/requst-data.action';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  title: string = 'Meal' // need for changing title
  
  @Select(MealState.mealCategories)
  mealCategories$: Observable<MealCategoriesInterface[]>

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new MealCategoriesAction())
  }

  takeCategories(filterCategories: MealCategoriesInterface) {
    this.router.navigate(['meal', filterCategories.strCategory])
  }

}
