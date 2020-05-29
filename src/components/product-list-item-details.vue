<template>
    <div>
        <button class="button" @click="onBackButtonClick()">Green</button>
        <p>{{productitem.name[language]}}</p>
        <p>Description: {{productitem.description[language]}}</p>
        <p>Year: {{productitem.year}}</p>
        <p>Image: {{productitem.image}}</p>
        <p>Video: {{productitem.video}}</p>
        <p>Role: {{productitem.my_role}}</p>
        <p>Technology:
            <ul>
                <li v-for="technology in productitem.technologies" :key="technology">{{technology}}</li>
            </ul>
        </p>
        <img class="icon" :src="'assets/' + productitem.icon">
    </div>
</template>

<script>
    export default {
        props: ['productitem', 'language'],

        methods: {
            onBackButtonClick: function()
            {
                this.$emit('backButtonClicked');
            }
        }
    }
</script>

<style scoped>
    div {
        border-color: darkseagreen;
        font-size: 12px;
        color: black;
        width: 100%
    }
</style>