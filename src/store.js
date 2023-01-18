import { reactive } from 'vue';

export const store = reactive({
    api_key: 'e91c766fa2c6ba7cca5d0b60f8e9b665',
    api: 'https://api.themoviedb.org/3/search/movie?api_key=e91c766fa2c6ba7cca5d0b60f8e9b665&language=it-IT&query=',
    api_tv: 'https://api.themoviedb.org/3/search/tv?api_key=e91c766fa2c6ba7cca5d0b60f8e9b665&language=it-IT&query=',
    movieList: [],
    seriesList: [],
    langList: [
        'en',
        'it',
        'fr',
        'de',
        'es',
        'ru'
    ]
})