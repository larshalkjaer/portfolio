<template>
    <div class="product-list-item-details">
        <div class="item-header">
            <product-icon class="product-icon" :apptype="productitem.apptype"></product-icon>
            <h2>{{productitem.name[language]}}</h2>
        </div>
        <button class="backbutton" @click="onBackButtonClick()">{{this.$translation.texts.backbutton_caption[language]}}</button>

        <div class="product-list-item-details-info">
            <video class="productimage" :poster="'assets/' + productitem.video + '.png'" controls v-if="showVideo">
                <source :src="'assets/' + productitem.video + '.mp4'" type="video/mp4">
            </video>
            <img class="productimage" :src="'assets/' + productitem.image" v-else>
            <p class="description" v-html="productitem.description[language]"></p>

            <p class="techlist-caption">{{this.$translation.texts.techlist_caption[language]}}</p>
            <tech-list class="techlist" :techlist="productitem.tech" :language="language" direction="vertical"></tech-list>
            <p class="resources" v-if="productitem.resources[language]">
                <span class="resources-caption">{{this.$translation.texts.resources_caption[language]}}</span>
                <span v-html="productitem.resources[language]"></span>
            </p>
            <p class="role">
                <span class="role-caption">{{this.$translation.texts.role_caption[language]}}</span>
                <span>{{this.$translation.texts.sortkeynames.role[language][productitem.role]}}</span>
            </p>
            <p class="year">
                <span class="year-caption">{{this.$translation.texts.year_caption[language]}}</span>
                <span>{{productitem.year}}</span>
            </p>
            <p class="company">
                <span class="company-caption">{{this.$translation.texts.company_caption[language]}}</span>
                <span>{{this.$translation.texts.sortkeynames.company[language][productitem.company]}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import ProductIcon from './product-icon.vue'
    import TechList from './tech-list.vue'

    export default {
        props: ['productitem', 'language', 'showmode'],

        components: {
            ProductIcon,
            TechList
        },

        computed: {
            showVideo: function()
            {
                return (this.productitem.company != 'moch') || ((this.showmode === 'cv') && !!this.productitem.video);
            }
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
    .item-header {
        position: relative;
    }
    h2 {
        font-size:2rem;
        border-bottom: 2px solid #de1818;
        margin: 32px 0 0 0;
        padding: 0 84px 8px 0;
    }
    .product-icon {
        position: absolute;
        bottom: -42px;
        right: 0;
        width: 84px;
        height: 84px;
    }
    .backbutton {
        display: block;
        border: 1px;
        font-size: 1.1rem;
        margin: 10px 0 15px 0;
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
        height: 100%;
        margin-bottom: 10px;
    }
    .description {
        line-height: 1.3rem;
        width: 49%;
    }
    .description >>> p {
        margin-bottom: 0.6rem;
    }
    .description >>> em {
        font-style: normal;
        font-weight: bold;
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
    .role-caption {
        font-weight: bold;
    }
    .role {
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
    .company-caption {
        font-weight: bold;
    }
    .company {
        width: 100%;
        margin: 10px 0 0 0;
    }
    @media screen and (max-width: 768px) {
        .product-list-item-details-info {
            flex-direction: column;
        }
        h2 {
            padding: 0 44px 8px 0;
        }
        .productimage {
            width: 100%;
        }
        .description {
            width: 100%;
        }
        .product-icon {
            bottom: -22px;
            width: 44px;
            height: 44px;
        }
    }
</style>