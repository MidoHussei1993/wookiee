export class Movie {
    constructor() {
        this.backdrop = '';
        this.cast = [];
        this.classification = '';
        this.director = '';
        this.genres = [];
        this.id = '';
        this.length = '';
        this.overview = '';
        this.poster = '';
        this.slug = '';
        this.title = '';
        this.imdb_rating = 0;
        this.released_on = new Date();
    }
    backdrop: string;
    cast: string[];
    classification: string;
    director: string;
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: Date;
    slug: string;
    title: string;
}