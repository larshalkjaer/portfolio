<template>
    <div class="techlist">
        <div :class="'techlist-list-' + direction" v-for="item in techlist" :key="item">
            <span class="techlist-list-item"><img class="icon" :src="'assets/' + techicon(item)">{{item}}</span>
        </div>
    </div>
</template>

<script>
    const techiconmap = {
        'HTML5, CSS, JavaScript': 'html5cssjs.png',
        'C++': 'cpp.png',
        'Flash, ActionScript 3': 'flashas3.png'
    };

    export default {
        props: ['techlist', 'direction'],

        methods: {
            techicon: function(techname) {
                return techiconmap[techname];
            }
        }
    };
</script>

<style scoped>
    .techlist-list-horizontal {
        display: inline;
    }
    .techlist-list-vertical {
        display: block;
    }
    .techlist-list-item {
        margin-right: 10px;
    }
    .icon {
        height: 16px;
        margin-right: 5px;
        position: relative;
        top: 3px;
    }
</style>