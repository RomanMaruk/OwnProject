import { Injectable } from "@angular/core";
import { State, Action, Selector, StateContext } from "@ngxs/store";
import { MealCategoriesInterface, MealCategoriesModel } from "src/app/model/meal/meal.interface";
import { MealDBService } from "src/app/services/mealServices/meal-db.service";
import { MealCategoriesAction } from "./meal.action";
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


export interface MealModel {
	mealCategories: MealCategoriesInterface[],
}

@State<MealModel>({
	name: 'Meal',
	defaults: {
		mealCategories: []
	}
})

@Injectable()
export class MealState {
	constructor(private mealCateegoriesServices: MealDBService) {}

	@Selector()
	static mealCategories(state: MealModel): MealCategoriesInterface[] {
		return state.mealCategories
	}

	@Action(MealCategoriesAction)
	getMealCategories({ patchState, getState }: StateContext<MealModel>) {
		const state = getState()
		this.mealCateegoriesServices.getAllMealCategories().pipe(
		)
			.subscribe((response: MealCategoriesModel) => {
				const data = Object.values(response.categories)
				
				patchState({
					// ...state,
					mealCategories: data
				})
			})
	}
}