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
        border-color: lime;
        font-size: 12px;
        color: black;
        flex-grow: 1;
    }
    .product-list-header {
        height: 2em;
        text-align: center;
    }
</style>