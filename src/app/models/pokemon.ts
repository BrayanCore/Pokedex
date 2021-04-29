export class PokemonCustom {

    static pokemonFromJSON(obj: Object) {
        return new PokemonCustom(
            obj["id"],
            obj["name"],
            obj["sprites"].front_default,
            obj["types"]["0"].type.name
        )
    }

    constructor(
        public id: number,
        public name: string,
        public image: string,
        public type: string
    ) {}

}