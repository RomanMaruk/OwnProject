

export class AddAnimal {
	static readonly type = '[Zoo] Add Animals'
	constructor(public name: string, public hayAmount: number) {}
}