<template>
    <div @click="onItemClick(productitem.id)">
        <p class="title">{{productitem.name[language]}}</p>
        <img class="icon" :src="'assets/' + productitem.icon">
    </div>
</template>

<script>
    export default {
        props: ['productitem', 'language'],

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
    div {
        border-color: tomato;
        font-size: 12px;
        color: black;
        width: 100%;
        min-width: 25em;
    }
    .title {
    }
    .icon {
        width: 32px;
        height: 32px;
    }
</style>