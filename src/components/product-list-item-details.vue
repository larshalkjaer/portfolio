<template>
    <div class="product-list-item-details">
        <div class="icon">
            <img class="icon-image" :src="'assets/' + productitem.icon">
        </div>
        <h2>{{productitem.name[language]}}</h2>
        <button class="button" @click="onBackButtonClick()">{{this.$translation.texts.backbutton_caption[language]}}</button>

        <div class="product-list-item-details-info">
            <video class="productimage" controls v-if="productitem.video">
                <source :src="'assets/' + productitem.video" type="video/mp4">
            </video>
            <img class="productimage" :src="'assets/' + productitem.image" v-else>
            <p class="description">{{productitem.description[language]}}</p>

            <p class="techlist-caption">{{this.$translation.texts.techlist_caption[language]}}</p>
            <tech-list class="techlist" :techlist="productitem.technologies" direction="vertical"></tech-list>
            <p  class="resources" v-if="productitem.resources[language]">
                <span class="resources-caption">{{this.$translation.texts.resources_caption[language]}}</span>
                <span v-html="productitem.resources[language]">{{productitem.resources[language]}}}</span>
            </p>
            <p class="role">
                <span class="role-caption">{{this.$translation.texts.role_caption[language]}}</span>
                <span>{{productitem.role}}</span>
            </p>
            <p class="year">
                <span class="year-caption">{{this.$translation.texts.year_caption[language]}}</span>
                <span>{{productitem.year}}</span>
            </p>
        </div>
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
            onBackButtonClick: function()
            {
                this.$emit('back-button-clicked');
            }
        }
    }
</script>

<style scoped>
    h2 {
        font-size:2rem;
        border-bottom: 2px solid #de1818;
        margin: 32px 0 0 0;
        padding: 0 0 8px;
    }
    .icon {
        width: 80px;
        height: 80px;
        position: relative;
        float: right;
        border-radius: 50%;
        border: 2px solid #de1818;
        margin-top: 4px;
        pointer-events: none;
    }
    .icon-image {
        width: 80px;
        height: 80px;
    }
    .button {
        display: block;
        border: 1px;
        font-size: 1.1rem;
        margin: 10px 0 10px 0;
        cursor: pointer;
        background-color: white;
    }
    .product-list-item-details-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .productimage {
        width: 49%;
    }
    .description {
        width: 49%;
    }
    .techlist-caption {
        width: 100%;
        margin: 10px 0 0px 0;
        font-weight: bold;
    }
    .techlist {
        width: 100%;
        margin-left: 1rem;
    }
    .resources-caption {
        font-weight: bold;
    }
    .resources {
        width: 100%;
        margin: 10px 0 0 0;
    }
    .year-caption {
        font-weight: bold;
    }
    .year {
        width: 100%;
        margin: 10px 0 0 0;
    }
    .role-caption {
        font-weight: bold;
    }
    .role {
        width: 100%;
        margin: 10px 0 0 0;
    }
    @media screen and (max-width: 768px) {
        .product-list-item-details-info {
            flex-direction: column;
        }
        .productimage {
            width: 100%;
        }
        .description {
            width: 100%;
        }
        .icon {
            width: 40px;
            height: 40px;
            margin-top: 24px;
        }
        .icon-image {
            width: 40px;
            height: 40px;
        }
    }
</style>