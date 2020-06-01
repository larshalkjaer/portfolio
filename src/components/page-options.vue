<template>
    <div class="page-options">
        <options-select class="options-select" :options="sortOptions" eventpostfix="sort"></options-select>
        <options-select class="options-select" :options="languageOptions" eventpostfix="language"></options-select>
    </div>
</template>

<script>
    import OptionsSelect from './options-select.vue'

    export default {
        props: ['language'],

        components: {
            OptionsSelect
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
    @media screen and (max-width: 480px) {
        .page-options {
            margin: 0 0 10px 15px;
        }
    }
</style>