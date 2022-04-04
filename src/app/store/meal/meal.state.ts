import { Injectable } from "@angular/core";
import { State, Action, Selector, StateContext } from "@ngxs/store";
import { FullMealInterface, FullMealModel, MealCategoriesInterface, MealCategoriesModel, MealsFilteredByCategoryInterface, MealsFilteredByCategoryModel } from "src/app/model/meal/meal.interface";
import { MealDBService } from "src/app/services/mealServices/meal-db.service";
import * as MealAction from "./meal.action";
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


export interface MealModel {
	mealCategories: MealCategoriesInterface[],
	filteredByCategory: MealsFilteredByCategoryInterface[]
	fullMeal: FullMealInterface[]
}

@State<MealModel>({
	name: 'Meal',
	defaults: {
		mealCategories: [],
		filteredByCategory: [],
		fullMeal: []
	}
})

@Injectable()
export class MealState {
	constructor(private mealCateegoriesServices: MealDBService) {}

	@Selector()
	static mealCategories(state: MealModel) {
		return state.mealCategories
	}

	@Selector()
	static mealFilteredByCategory(state: MealModel) {
		return state.filteredByCategory
	}

	@Action(MealAction.MealCategoriesAction)
	getMealCategories({ patchState, getState }: StateContext<MealModel>) {
		const state = getState()
		this.mealCateegoriesServices.getAllMealCategories().pipe(
		)
			.subscribe((response: MealCategoriesModel) => {
				const data = Object.values(response.categories)
				
				patchState({
					...state,
					mealCategories: data
				})
			})
	}

	@Action(MealAction.MealFilteredByCategoryAction)
	filteredByCategory({ patchState }: StateContext<MealModel>, { category }: any) {
		this.mealCateegoriesServices.filteredByCategory(category)
			.subscribe((response: MealsFilteredByCategoryModel) => {
				const data = Object.values(response.meals)

				patchState({
					filteredByCategory: data
				})
				
			})
	}

	@Action(MealAction.FullMealAction)
	fullMeal({ patchState }: StateContext<MealModel>, { idMeal }: any) {
		this.mealCateegoriesServices.fullMeal(idMeal)
			.subscribe((response: FullMealModel) => {
				const data = Object.values(response.meals)

				patchState({
					fullMeal: data
				})
			})
	}
}