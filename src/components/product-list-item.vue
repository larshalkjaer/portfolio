<template>
    <div class="product-list-item" @click="onItemClick(productitem.id)">
        <div class="icon">
            <img class="icon-image" :src="'assets/' + productitem.icon">
        </div>
        <h3>{{productitem.name[language]}}</h3>
        <tech-list :techlist="productitem.technologies" direction="horizontal"></tech-list>
    </div>
</template>

<script>
    import TechList from './tech-list.vue'

    export default {
        props: ['productitem', 'language'],

        components: {
            TechList
        },

        methods: {
            onItemClick: function(item)
            {
                let vm = this.$parent;
                while(vm)
                {
                    vm.$emit('itemClicked', item);
                    vm = vm.$parent;
                }
            }
        }
    }
</script>

<style scoped>
    product-list-item {
        color: black;
        width: 100%;
        padding: 5px;
    }
    h3 {
        font-size:1.2rem;
        border-bottom: 2px solid #de1818;
        margin: 32px 0 0;
        padding: 0 0 8px;
    }
    .icon {
        width: 40px;
        height: 40px;
        position: relative;
        float: right;
        border-radius: 50%;
        border: 2px solid #de1818;
        margin-top: 10px;
        pointer-events: none;
    }
    .icon-image {
        width: 40px;
        height: 40px;
    }
</style>