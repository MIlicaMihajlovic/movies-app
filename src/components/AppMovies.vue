<template>
    <div>
        
        <ul class="list-unstyled">
            <li v-for="(movie, index) in movies" :key="index">
                <movie-row :movie="movie"></movie-row>
            </li>
        </ul>
        
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
            movies: []
        }
    },

    beforeRouteEnter(to,from,next) {
        movies.getAll()
        .then(response => {
            next(vm => {
                vm.movies = response.data;
            })
        })
    }
}
</script>

