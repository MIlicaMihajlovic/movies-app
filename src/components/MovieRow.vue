<template>
    <div class="container">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.director }}</p>
        <img :src="movie.imageUrl"/>
        <p>{{ movie.relaseDate }}</p>
        <p>{{ movie.genre }}</p>
        <p>{{ movie.duration }}</p>
    </div>
</template>

<script>
export default {
    
    props: ['movie']
}
</script>

