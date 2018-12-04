<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="(movie, index) in movies" :key="index">

            </li>
        </ul>
    </div>
</template>

<script>

import { movies } from '../service/movies.js'

export default {
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

