<template>
    <div>
        <div class="product-list-header">{{header}}</div>
        <div v-for="item in items" :key="item.id">
            <product-list-item
                :productitem="item" :language="language">
            </product-list-item>
        </div>
    </div>
</template>

<script>
    import ProductListItem from './product-list-item.vue'

    export default {
        props: ['header', 'items', 'language'],

        components: {
            ProductListItem
        }
    }
</script>

<style scoped>
    div {
        flex-grow: 1;
        margin: 5px;
        min-width: 25rem;
    }
    .product-list-header {
        height: 2.5em;
        line-height: 2.5em;
        font-size: 1.3rem;
        text-align: center;
        background-color: #f9f3c5;
    }
</style>