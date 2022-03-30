import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { CreateUsersInterface } from "src/app/model/createUsers.interface";
import { CreateUsersAction } from "./createUsers.action";

export class CreateUsersModel {
	createdUsers: CreateUsersInterface[]
}

@State<CreateUsersModel>({
	name: 'CreatedUsers',
	defaults: {
		createdUsers: []
	}
})

@Injectable()
export class CreateUsersState {
	constructor() {}

	@Selector()
	static getCreateUsers(state: CreateUsersModel): CreateUsersInterface[] {
		return state.createdUsers
	}

	@Action(CreateUsersAction)
	addCreatedUsers({getState, patchState}: StateContext<CreateUsersModel>, { payload }: CreateUsersAction) {
		const state = getState();
		patchState({
			createdUsers: [...state.createdUsers, payload],
		})
	}
}

