import axios from "axios";
class MovieAPI {
    #API_KEY;
    #BASE_URL;
    #GENRE_PATH;
    #TENDS_PATH;
    #SEARCH_PATH;
    #totalResults;
    constructor() {
        this.#API_KEY = '9cda16d98a6e510af2decf0d66e8e7d5';
        this.#BASE_URL = 'https://api.themoviedb.org/3/';
        this.#GENRE_PATH = 'genre/movie/list';
        this.#TENDS_PATH = 'trending/movie/week';
        this.#SEARCH_PATH = 'search/movie';
        this.#totalResults = null;
    }
    async getGeners() {
        const { data } = await axios.get(`${this.#BASE_URL}${this.#GENRE_PATH}`, {
            params: {
                api_key: this.#API_KEY
            }
        })
        return data
    }

    async getTrendMovie(page = 1) {
        const { data } = await axios.get(`${this.#BASE_URL}${this.#TENDS_PATH}`, {
            params: {
                api_key: this.#API_KEY,
                page
            }
        })
        return data
    }

    async getSearchMovie(query, page = 1) {
        const { data } = await axios.get(`${this.#BASE_URL}${this.#SEARCH_PATH}`, {
            params: {
                api_key: this.#API_KEY,
                language: 'en-US',
                page,
                query
            }
        })
        this.#setTotalResults(data.total_results)
        return data
    }

    async getMovieById(id) {
        const { data } = await axios.get(`${this.#BASE_URL}movie/${id}`, {
            params: {
                api_key: this.#API_KEY,
                language: 'en-US'
            }
        })
        return data
    }

    #setTotalResults(num) {
        this.#totalResults = num;
    }

    getTotalResults() {
        return this.#totalResults
    }
}
