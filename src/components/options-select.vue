<template>
    <div>
        <select class="select" @change="onItemSelect($event)">
            <option v-for="(option, name) in options" :value="option" :key="name" :selected="option === SelectedOption()">{{name}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['options', 'eventpostfix'],

        created: function () {
            this.selectedoption =  ''
        },

        methods: {
            SelectedOption: function()
            {
                return this.selectedoption;
            },

            onItemSelect: function(item)
            {
                this.selectedoption = item.target.value;
                let vm = this.$parent;
                while(vm)
                {
                    vm.$emit('option-select-' + this.eventpostfix, this.selectedoption);
                    vm = vm.$parent;
                }
            }
        }
    }
</script>

<style scoped>
    .select {
        padding: 0.2rem 0.5rem;
        background-color: #ffffff;
    }
</style>