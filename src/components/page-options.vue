<template>
    <div class="page-options">
        <options-select class="options-select" :options="sortOptions" eventpostfix="sort"></options-select>
        <options-select class="options-select" :options="languageOptions" eventpostfix="language"></options-select>
        <div class="about-btn" @click="onAboutButtonClick()">
            <img class="about-icon" src="assets/abouticon.png" />
        </div>
    </div>
</template>

<script>
    import OptionsSelect from './options-select.vue'

    export default {
        props: ['language'],

        components: {
            OptionsSelect
        },

        methods: {
            onAboutButtonClick: function()
            {
                this.$emit('about-button-clicked');
            }
        },

        computed: {
            sortOptions: function()
            {
                return this.$translation.texts.sortoptions[this.language];
            },

            languageOptions: function()
            {
                return this.$translation.texts.languageoptions;
            }
        }
    }
</script>

<style scoped>
    .page-options {
        display: flex;
        align-items: center;
        margin: 0;
    }
    .options-select {
        margin-right: 15px;
    }
    .about-btn {
        position: relative;
        margin-right: 15px;
        width: 24px;
        cursor: pointer;
    }
    .about-icon {
        position: absolute;
        bottom: -12px;
    }
    @media screen and (max-width: 480px) {
        .page-options {
            margin: 0 0 10px 15px;
        }
    }
</style>