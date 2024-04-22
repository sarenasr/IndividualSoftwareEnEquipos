export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    web: string;
    image: string;

    
    constructor(id: number, name: string, channel: string, seasons: number, description: string, web: string, image: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.web = web;
        this.image = image;
    }
}