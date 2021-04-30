export class PokemonDetailed {

    static detailedPokemonFromJSON(obj: Object) {
        return new PokemonDetailed(
            obj["id"],
            obj["name"],
            obj["sprites"]["front_default"],
            obj["types"]["0"]["type"]["name"],
            obj["height"],
            obj["weight"],
            obj["stats"]["1"]["base_stat"],
            obj["stats"]["2"]["base_stat"],
            obj["stats"]["3"]["base_stat"],
            obj["stats"]["5"]["base_stat"]
        )
    }

    constructor(
        public id: number,
        public name: string,
        public image: string,
        public type: string,
        public height: number,
        public weight: number,
        public attack: number,
        public defense: number,
        public special_attack: number,
        public speed: number,
    ) {}

}