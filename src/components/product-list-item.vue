<template>
    <div class="product-list-item" @click="onItemClick(productitem.id)">
        <product-icon class="product-icon" :apptype="productitem.apptype"></product-icon>
        <h3>{{productitem.name[language]}}</h3>
        <tech-list class="techlist" :techlist="productitem.tech" :language="language" direction="horizontal"></tech-list>
    </div>
</template>

<script>
    import ProductIcon from './product-icon.vue'
    import TechList from './tech-list.vue'

    export default {
        props: ['productitem', 'language'],

        components: {
            ProductIcon,
            TechList
        },

        methods: {
            onItemClick: function(item)
            {
                let vm = this.$parent;
                while(vm)
                {
                    vm.$emit('product-list-item-clicked', item);
                    vm = vm.$parent;
                }
            }
        }
    }
</script>

<style scoped>
    div.product-list-item {
        width: 100%;
        padding: 5px;
        cursor: pointer;
    }
    h3 {
        font-size:1.2rem;
        border-bottom: 2px solid #de1818;
        margin: 0;
        padding: 0 0 8px;
        cursor: pointer;
    }
    .product-icon {
        width: 44px;
        height: 44px;
        margin-top: 10px;
    }
    .techlist {
        margin: 10px 0 20px 0;
    }
</style>