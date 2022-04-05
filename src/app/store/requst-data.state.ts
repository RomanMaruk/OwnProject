import { Injectable } from "@angular/core";
import { Selector, Action, StateContext, State } from "@ngxs/store";
import { GetHeaderAction } from "./requst-data.action";

export interface RequstStateModel {
	header: string
}

@State<RequstStateModel>({
	name: 'requstData',
	defaults: {
		header: ''
	}
})

@Injectable()
export class RequestDataState {
	constructor() {}

	@Selector()
	static getHeader(state: RequstStateModel) {
		return state.header
	}

	@Action(GetHeaderAction)
	getHeader({ getState, patchState, setState }: StateContext<RequstStateModel>, {header}: GetHeaderAction) {
		const state = getState()
		patchState({
			...state,
			header: header
		})
		// setState((state) => ({...state, header: header}))
	}
} 