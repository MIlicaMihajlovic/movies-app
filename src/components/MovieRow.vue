<template>
    <div class="container">
         
            <div class="card">       
                <h3>{{ movie.title }}</h3>
                <p>{{ movie.director }}</p>        
                <img :src="movie.imageUrl" class="card-img-top" />
                <div class="card-body">
                    <p class="card-text">{{ movie.relaseDate }}</p>
                    <p class="card-text">{{ movie.genre }}</p>
                    <p class="card-text">{{ movie.duration }}</p>
                    <button type="button" class="btn btn-primary">Select</button>
                </div>
            </div>
             
    </div>
</template>

<script>
export default {
    
    props: ['movie']
}
</script>

<style>
.container .card {
    width: 18rem;
}
</style>


