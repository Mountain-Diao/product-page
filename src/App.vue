<template>
  	<div>
		<router-view></router-view>
		<custom-footer/>
	</div>
</template>

<script>
import CustomFooter from './@components/CustomFooter.vue';

export default {
	name: "App",
	components: {
		CustomFooter
	},
	data() {
		return {
		};
	},
};
</script>

<style lang="scss">
	@import "./styles.scss";
</style>