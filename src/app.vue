<template>
    <div id="app">
        <div class="appheader">
            <page-header class="page-header" :pageTitle="$translation.texts.title" />
            <page-options class="page-options" :language="language" @option-select-sort="selectSortOption($event)" @option-select-language="selectLanguageOption($event)"/>
        </div>
        <div class="product-table" v-if="!showDetails">
            <div class="product-list" v-for="listitem in sortedProductList" :key="listitem.header">
                <product-list @product-list-item-clicked="showProductItem($event)" :header="listitem.header" :items="listitem.items" :language="language" />
            </div>
        </div>
        <div class="product-list-item-details" v-else>
            <product-list-item-details @back-button-clicked="showItemDetails(false)" :productitem="currentProductItem" :language="language" />
        </div>
    </div>
</template>

<script>
    import PageHeader from './components/page-header.vue'
    import PageOptions from './components/page-options.vue'
    import ProductList from './components/product-list.vue'
    import ProductListItemDetails from './components/product-list-item-details.vue'
    import AppData from './data/portfolio.json'


    export default {
        name: 'app',

        components: {
            PageHeader,
            PageOptions,
            ProductList,
            ProductListItemDetails
        },
        
        created: function () {
            this.$translation.texts = AppData.texts;
        },

        data: function() {
            return {
                currentItemID: 0,
                showDetails: false,
                sortingKey: '',
                language: 'da',
                products: AppData.products
            }
        },

        computed: {
            sortedProductList: function()
            {
                return this.buildProductList(this.sortingKey, this.language);
            },

            currentProductItem: function()
            {
                return this.getItemByID(this.currentItemID);
            }
        },

        methods: {
            showProductItem: function(itemid)
            {
                this.currentItemID = itemid;
                this.showItemDetails(true);
            },

            showItemDetails: function(visible)
            {
                this.showDetails = visible;
            },

            buildProductList: function(sortingkey)
            {
                var sortedlist = [];
                for (let idx = 0; idx < this.products.length; idx++)
                {
                    var item = this.products[idx];
                    this.addItemToList(item, sortedlist, sortingkey);
                }
                return sortedlist;
            },

            addItemToList: function(item, sortedlist, sortingkey)
            {
                var sortingvalues = this.getSortingValues(item, sortingkey);
                sortingvalues.forEach(function(sortingvalue) {
                    var foundlistitem = sortedlist.find(function(listitem){return (listitem.header === sortingvalue)});
                    foundlistitem ? foundlistitem.items.push(item) : sortedlist.push({header: sortingvalue, items: [item]});
                });
            },

            getSortingValues: function(item, sortingkey)
            {
                let sortingvalues = item[sortingkey] || 'All';
                return Array.isArray(sortingvalues) ? sortingvalues : [sortingvalues];
            },

            getItemByID: function(itemid)
            {
                return this.products.find(function(item) {return (item.id === itemid);}) || {};
            },

            selectSortOption: function(option)
            {
                this.sortingKey = option;
            },

            selectLanguageOption: function(option)
            {
                this.language = option;
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    #app {
        font-family: 'Roboto', sans-serif;
    }
    .appheader {
        /* display: flex; */
        /* flex-wrap: wrap; */
        background-color: #87aab9;
        width: 100%;
    }
    .page-header {
        /* flex-grow: 1; */
        /* min-width: 20rem; */
    }
    .page-options {
        display: none;
        /* flex-grow: 1; */
        /* min-width: 20rem; */
    }
    .product-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .product-list {
        flex-grow: 1;
    }
    .product-list-item-details {
        margin: 10px 10px
    }
</style>