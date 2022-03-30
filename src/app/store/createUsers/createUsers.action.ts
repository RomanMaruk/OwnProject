import { CreateUsersInterface } from "src/app/model/createUsers.interface";

export class CreateUsersAction {
	static readonly type ='[Create Users] Created Users'
	constructor(public payload: CreateUsersInterface) {}
}