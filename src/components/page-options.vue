<template>
    <div class="page-options">
        <options-select class="options-sort-select" :options="sortOptions" eventpostfix="sort"></options-select>
        <options-select class="options-language-select" :options="languageOptions" eventpostfix="language"></options-select>
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
        justify-content: flex-end;
    }
    /* .options-sort-select {
    }
    .options-language-select {
    } */
</style>