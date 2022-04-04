export class MealCategoriesAction {
static readonly type = '[Meal] Get categorie of meal';
}

export class MealFilteredByCategoryAction {
	static readonly type = '[Meal] Meal fealtered by category'
	constructor(public category: string) {}
}

export class FullMealAction {
	static readonly type = '[Meal] Full Meal by id'
	constructor(public idMeal: number) {}
}

