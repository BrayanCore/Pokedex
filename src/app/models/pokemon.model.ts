export class Pokemon {

    public constructor(init?: Partial<Pokemon>) {
        Object.assign(this, init);
    }

    _id: string = "";
    name: string = "";

}