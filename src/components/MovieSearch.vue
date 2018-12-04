<template>
    <div>
        <form class="form-inline my-2 my-lg-0">
            <input @input="handleSearch" class="form-control mr-sm-2" type="search" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        handleSearch(event) {
            window.EventHub.$emit('search', event.target.value )
        }
    }
}
</script>

