<template>
	<h1>Nothing!!</h1>
</template>

<script>
export default {
	name:'Tab2',
	inject:['changeTitle'],
	created (e) {
		this.changeTitle(e)
	},

}
</script>

<style>
	h1{
		margin: 0;
	}
</style>

