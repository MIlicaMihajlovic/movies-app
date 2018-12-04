<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link class="nav-link" :to="{name: 'movies'}">
                <!-- <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""> -->
                Movies
            </router-link>
            <movie-search></movie-search>
        </nav>
    </div>
</template>

<script>

import MovieSearch from './MovieSearch.vue'

export default {
    components: {
        MovieSearch
    },
    
   
    
}
</script>

