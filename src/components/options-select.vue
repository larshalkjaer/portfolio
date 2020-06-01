<template>
    <div>
        <select class="select" @input="onItemSelect($event)">
            <option v-for="(option, name) in options" :value="option" :key="name" :selected="option === SelectedOption()">{{name}}</option>
        </select>
    </div>
</template>

<script>
    let selectedoption =  '';

    export default {
        props: ['options', 'eventpostfix'],

        methods: {
            SelectedOption: function()
            {
                return selectedoption;
            },

            onItemSelect: function(item)
            {
                selectedoption = item.target.value;
                let vm = this.$parent;
                while(vm)
                {
                    vm.$emit('option-select-' + this.eventpostfix, selectedoption);
                    vm = vm.$parent;
                }
            }
        }
    }
</script>

<style scoped>
    .select {
        padding: 0.3rem 0;
    }
</style>