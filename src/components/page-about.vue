<template>
	<div>
        <div class="about-about">
            <h3>{{aboutInfo.header}}</h3>
            <button class="backbutton" @click="onBackButtonClick()">{{this.$translation.texts.backbutton_caption[language]}}</button>
            <p>{{aboutInfo.description}}</p>
        </div>
	</div>
</template>

<script>
	export default {
		props: ["aboutInfo", "language"],

        methods: {
            onBackButtonClick: function()
            {
                this.$emit('back-button-clicked');
            }
        }
    };
</script>

<style scoped>
    .about-about {
        margin: 2rem 4rem 2rem 4rem;
    }
    h3 {
        font-size:1.2rem;
        border-bottom: 2px solid #de1818;
        padding: 0 0px 8px 0;
        margin: 0 0 8px 0;
    }
    .backbutton {
        display: block;
        border: 1px;
        font-size: 1.1rem;
        margin: 10px 0 15px 0;
        cursor: pointer;
        background-color: white;
    }
    @media screen and (max-width: 768px) {
        .about-about {
            margin: 2rem 2rem 2rem 2rem;
        }
    }
</style>