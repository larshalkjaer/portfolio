<template>
    <div class="icon">
        <img class="icon-image" :src="'assets/' + appicon(apptype)">
    </div>
</template>

<script>
    const apptypeiconmap = {
        'app': 'appicon.png',
        'component': 'componenticon.png',
        'course': 'courseicon.png',
        'framework': 'frameworkicon.png',
        'game': 'gameicon.png',
        'language': 'languageicon.png',
        'pim': 'pimicon.png',
        'tool': 'toolicon.png'
    };

    export default {
        props: ['apptype'],

        methods: {
            appicon: function(type) {
                return apptypeiconmap[type];
            }
        }
    };
</script>

<style scoped>
    .icon {
        position: relative;
        float: right;
        border-radius: 50%;
        border: 2px solid #de1818;
    }
    .icon-image {
        width: 100%;
        height: 100%;
    }
</style>