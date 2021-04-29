export class PokemonDetailed {

    static detailedPokemonFromJSON(obj: Object) {
        return new PokemonDetailed(
            obj["id"],
            obj["name"],
            obj["sprites"].front_default,
            obj["types"]["0"].type.name,
            obj["height"],
            obj["weight"]
        )
    }

    constructor(
        public id: number,
        public name: string,
        public image: string,
        public type: string,
        public height: number,
        public weight: number
    ) {}

}