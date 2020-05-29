<template>
    <div id="app">
        <div class="appheader">
            <page-header :pageTitle="appdata.title" />
            <page-filter />
        </div>
        <div class="product-table" v-if="!showDetails">
            <div class="product-list" v-for="listitem in sortedProductList" :key="listitem.header">
                <product-list @itemClicked="showProductItem($event)" :header="listitem.header" :items="listitem.items" :language="language" />
            </div>
        </div>
        <div class="product-list-item-details" v-else>
            <product-list-item-details @backButtonClicked="showItemDetails(false)" :productitem="currentProductItem" :language="language" />
        </div>
    </div>
</template>

<script>
    import PageHeader from './components/page-header.vue'
    import PageFilter from './components/page-filter.vue'
    import ProductList from './components/product-list.vue'
    import ProductListItemDetails from './components/product-list-item-details.vue'
    import AppData from './data/portfolio.json'

    export default {
        name: 'app',

        components: {
            PageHeader,
            PageFilter,
            ProductList,
            ProductListItemDetails
        },
        
        data: function() {
            return {
                currentItemID: 0,
                showDetails: false,
                sortingKey: '',
                language: 'da',
                appdata: AppData
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
                for (let idx = 0; idx < this.appdata.products.length; idx++)
                {
                    var item = this.appdata.products[idx];
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
                return this.appdata.products.find(function(item) {return (item.id === itemid);}) || {};
            }
        }
    }
</script>

<style>
    div {
        border-style: solid;
        border-color: coral;
        border: 1 px;
    }
    #app {
        font-family: Helvetica, Arial, sans-serif;
    }
    .button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .appheader {
        display: flex;
    }
    @media screen and (max-width: 480px) {
        .appheader {
            flex-direction: column;       
        }
    }
    .product-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .product-list {
        flex-grow: 1;
    }
    /* .product-list-item-details {
    } */
</style>