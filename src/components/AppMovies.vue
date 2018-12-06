<template>
    <div class="container">

        <template v-if="filtredMovies.length">
            <div class="d-flex align-items-stretch" v-for="(movie, index) in filtredMovies" :key="index">
                <movie-row :movie="movie"></movie-row>
            </div>
        </template>
        <template v-else>
            <div>
                <p>Nema tog filma u nasoj listi</p>
                <movie-row :movie="movie"></movie-row>
            </div>
        </template>
    </div>
</template>

<script>

import { movies } from '../service/movies.js'
import MovieRow from './MovieRow.vue'

export default {

    components: {
        MovieRow
    },

    data() {
        return {
            movies: [],

            term: ''
        }
    },

    beforeRouteEnter(to,from,next) {
        movies.getAll()
        .then(response => {
            next(vm => {
                vm.movies = response.data;
            })
        })
    },

    created() {
        window.EventHub.$on('search', (term) => {
            this.term = term
        });
    },

    computed: {
        filtredMovies() {
            console.log(this.term);
           return this.movies.filter(movie => movie.title.toLowerCase().includes(this.term.toLowerCase())) 
        }
    }
}
</script>

