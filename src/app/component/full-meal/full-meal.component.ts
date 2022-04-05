import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FullMealInterface } from 'src/app/model/meal/meal.interface';
import { MealState } from 'src/app/store/meal/meal.state';

@Component({
  selector: 'app-full-meal',
  templateUrl: './full-meal.component.html',
  styleUrls: ['./full-meal.component.scss']
})
export class FullMealComponent implements OnInit {
  @Select(MealState.fulMeal)
  fullMeal$: Observable<FullMealInterface>

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

}
