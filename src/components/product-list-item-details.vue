<template>
    <div class="product-list-item-details">
        <div class="icon">
            <img class="icon-image" :src="'assets/' + productitem.icon">
        </div>
        <h2>{{productitem.name[language]}}</h2>
        <button class="button" @click="onBackButtonClick()">&lt; Tilbage til liste</button>

        <div class="product-list-item-details-info">
            <video class="videoplayer" controls>
                <source :src="'assets/' + productitem.video" type="video/mp4">
            </video>
            <!-- <p>Image: {{productitem.image}}</p> -->
            <p class="description">{{productitem.description[language]}}</p>

            <tech-list class="techlist" :techlist="productitem.technologies" direction="vertical"></tech-list>
            <p class="year">{{productitem.year}}</p>
            <p class="role">{{productitem.my_role}}</p>
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
                this.$emit('backButtonClicked');
            }
        }
    }
</script>

<style scoped>
    .product-list-item-details {
        margin: 10px 10px
    }
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
    .videoplayer {
        width: 49%;
    }
    .description {
        width: 49%;
    }
    .techlist {
        width: 100%;
    }
    .year {
        width: 100%;
    }
    .role {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        .product-list-item-details-info {
            flex-direction: column;
        }
        .videoplayer {
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