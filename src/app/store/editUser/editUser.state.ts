import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DesignutilityService } from 'src/app/services/NgxsPractica/sesignutility-service.service';
import { tap } from 'rxjs/operators'
import { AddUsers, DeleteUsers, GetUsers, UpdateUsers } from './editUser.action';

export class UserStateModel {
	users: any
}

@State<UserStateModel>({
	name: 'usersState',
	defaults: {
		users: []
	}
})

@Injectable()
export class EditUsersState {
	constructor (private _du: DesignutilityService) {}

	@Selector()
	static selectStateData(state: UserStateModel): any {
		return state.users
	}

	@Action(GetUsers)
	getDataFromState(ctx: StateContext<UserStateModel>) {
		return this._du.fetchUser().pipe(
			tap(returnData => {
				const state = ctx.getState()

				ctx.setState({
					...state,
					users: returnData
				})
			})
		)
	}

	@Action(AddUsers)
	addDateToState(ctx: StateContext<UserStateModel>, {payload}: AddUsers) {
		return this._du.addUsers(payload).pipe(
			tap(returnData => {
				const state = ctx.getState()
				ctx.patchState({
					users: [...state.users, returnData]
				})
			})
		)
	}

	@Action(UpdateUsers)
	updateDateOfState(ctx: StateContext<UserStateModel>, { payload, id, i }: UpdateUsers) {
		return this._du.upDateUsers(payload, i).pipe(
			tap(returnData => {
				const state = ctx.getState()

				const userList = [...state.users]
				userList[i] = payload

				ctx.setState({
					...state,
					users: userList
				})
			})
		)
	}

	@Action(DeleteUsers)
	deleteDataFromState(ctx: StateContext<UserStateModel>, { id }: DeleteUsers) {
		return this._du.deleteUsers(id).pipe(
			tap(returnData => {
				const state = ctx.getState()
				console.log(`The id is ${id}`);

				const filteredArray = state.users.filter((contest: any) => contest.id !== id)

				ctx.setState({
					...state,
					users: filteredArray
				})
			})
		)
	}
}