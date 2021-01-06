<template>
    <div id="app">
        <div class="appheader">
            <page-header class="page-header" :pageTitle="$translation.texts.title" />
            <page-options class="page-options" :language="language" @option-select-sort="selectSortOption($event)" @option-select-language="selectLanguageOption($event)" @about-button-clicked="setViewMode('about')"/>
        </div>
        <div class="product-list-item-details" v-if="viewmode==='details'">
            <product-list-item-details @back-button-clicked="setViewMode('list')" :productitem="currentProductItem" :language="language" :showmode="showmode"/>
        </div>
        <div class="about" v-else-if="viewmode==='about'">
            <page-about class="page-about" @back-button-clicked="setViewMode('list')" :aboutInfo="$translation.texts.about[this.language]" :language="language" />
        </div>
        <div class="product-table" v-else>
            <div class="product-list" v-for="listitem in sortedProductList" :key="listitem.sortingvalue">
                <product-list @product-list-item-clicked="showProductItem($event)" :header="listitem.header" :items="listitem.items" :language="language" />
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from './components/page-header.vue'
    import PageOptions from './components/page-options.vue'
    import PageAbout from './components/page-about.vue'
    import ProductList from './components/product-list.vue'
    import ProductListItemDetails from './components/product-list-item-details.vue'
    import AppData from './data/portfolio.json'

    export default {
        name: 'app',

        components: {
            PageHeader,
            PageOptions,
            PageAbout,
            ProductList,
            ProductListItemDetails
        },
        
        created: function () {
            this.$translation.texts = AppData.texts;
        },

        mounted: function () {
            this.products.reverse();
            this.showmode = this.getShowMode();
        },

        data: function() {
            return {
                currentItemID: 0,
                viewmode: 'list',
                sortingKey: 'none',
                language: 'da',
                showmode: '',
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
            getShowMode: function()
            {
                const uri = window.location.search.substring(1); 
                const params = new URLSearchParams(uri);
                const showparam = params.get("show");
                const showmode = ['cv','li'].includes(showparam.toLowerCase()) ? showparam.toLowerCase() : '';
                return showmode;
            },

            showProductItem: function(itemid)
            {
                this.currentItemID = itemid;
                this.setViewMode('details');
            },

            setViewMode: function(mode)
            {
                (this.viewmode !== mode) ? (this.viewmode = mode) : (this.viewmode = 'list');
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
                var sortingvalues = this.getSortingValuesFromListItem(item, sortingkey);
                sortingvalues.forEach(function(sortingvalue) {
                    var existinglistitem = sortedlist.find(function(listitem) {
                        return (listitem.sortingvalue === sortingvalue)
                    });
                    if (existinglistitem)
                    {
                        existinglistitem.items.push(item);
                    }
                    else
                    {
                        let headertext = this.$translation.texts.sortkeynames[sortingkey][this.language][sortingvalue];
                        sortedlist.push({sortingvalue: sortingvalue, header: headertext, items: [item]});
                    }
                }.bind(this));
            },

            getSortingValuesFromListItem: function(item, sortingkey)
            {
                let sortingvalues = item[sortingkey] || 'none';
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

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #656f6f;
    }
    #app {
        font-family: 'Roboto', sans-serif;
        max-width: 1140px; 
        min-height: 100%;
        margin: 0 auto !important; 
        float: none !important; 
        background-color: white;
    }
    .appheader {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: #87aab9;
        width: 100%;
    }
    .page-header {
        flex-grow: 1;
    }
    .page-options {
        flex-grow: 1;
        justify-content: flex-end;
    }
    .product-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .product-list {
        flex-grow: 1;
        flex-basis: 20%;
        min-width: 300px;
    }
    .product-list-item-details {
        margin: 10px 10px 0px 10px;
        padding-bottom: 20px;
    }
    @media screen and (max-width: 480px) {
        .appheader {
            flex-direction: column;
        }
        .page-options {
            justify-content: flex-start;
        }
    }
</style>