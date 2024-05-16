import { Stats } from "../../shared/ui/stats/stats.interface";

export class Pokemon {
    name: string;
    image: string;
    stats: Stats;

    constructor(name: string, image: string, stats: Stats){
        this.name = name;
        this.image = image;
        this.stats = stats;
    }
}