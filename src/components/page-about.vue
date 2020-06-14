<template>
	<div>
        <div class="about-about">
            <h3>{{aboutInfo.header}}</h3>
            <button class="backbutton" @click="onBackButtonClick()">{{this.$translation.texts.backbutton_caption[language]}}</button>
            <div class="aboutdescription" v-html="aboutInfo.description"></div>
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
    .aboutdescription >>> p {
        margin-bottom: 0.6rem;
    }
    .aboutdescription >>> h3 {
        font-size: 1.2rem;
        margin: 1rem 0 0.5rem 0;
    }
    .aboutdescription >>> ul { 
        list-style-type: disc; 
        list-style-position: initial;
        margin-left: 2rem;
        margin-bottom: 0.6rem;
    }
    .aboutdescription >>> ul { 
        list-style-type: disc; 
        list-style-position: initial;
        margin-left: 2rem; 
    }
    @media screen and (max-width: 768px) {
        .about-about {
            margin: 2rem 2rem 2rem 2rem;
        }
    }
</style>