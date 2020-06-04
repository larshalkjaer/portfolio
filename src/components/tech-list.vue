<template>
    <div class="techlist">
        <div :class="'techlist-list-' + direction" v-for="item in techlist" :key="item">
            <span class="techlist-list-item"><img class="icon" :src="'assets/' + techicon(item)">{{techname(language, item)}}</span>
        </div>
    </div>
</template>

<script>
    const techiconmap = {
        'captivate': 'captivate.png',
        'cpp': 'cpp.png',
        'delphipas': 'delphipas.png',
        'director': 'director.png',
        'flashas3': 'flashas3.png',
        'htmlcssjs': 'html5cssjs.png',
        'nodejs': 'nodejs.png',
        'storyline': 'storyline.png',
        'unity': 'unity.png'
    };

    export default {
        props: ['techlist', 'direction', 'language'],

        methods: {
            techicon: function(name) {
                return techiconmap[name];
            },
            techname: function(language, name) {
                return this.$translation.texts.sortkeynames.tech[language][name];
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
        white-space: pre;
    }
    .icon {
        height: 16px;
        margin-right: 5px;
        position: relative;
        top: 3px;
    }
</style>