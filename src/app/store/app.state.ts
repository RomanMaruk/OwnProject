import { CreateUsersState } from "./createUsers/createUsers.state";
import { EditUsersState } from "./editUser/editUser.state";
import { AnimalsState } from "./Zoo/zoo.state";
import { RequestDataState } from "./requst-data.state";
import { MealState } from "./meal/meal.state";


export const appState = [RequestDataState, MealState, CreateUsersState, EditUsersState, AnimalsState]