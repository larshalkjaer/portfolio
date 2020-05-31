<template>
	<div class="page-title">
		<h1>{{pageTitle}}</h1>
	</div>
</template>

<script>
	export default {
		props: ["pageTitle"]
	};
</script>

<style scoped>
    h1 {
        font-size: 40px;
        color: #ffffff;
        margin: 5px;
    }
    .page-title {
        width: 200px;
        flex-grow: 1;
        margin: 5px 5px 5px 10px;
    }
</style>