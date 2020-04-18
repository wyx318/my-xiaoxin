<template>
	<diV class="layout-wrapper" :class="classPrefix&&`${classPrefix}-content`">
		<div class="content" :class="classPrefix&&`${classPrefix}-content`">
			<slot/>
		</div>
		<Nav/>
	</diV>
</template>

<script lang="ts">
  export default {
    props: ['classPrefix'],
    name: 'Layout'
  };
</script>

<style scoped lang="scss">
	.layout-wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: auto;
		}
	
	.content {
		flex-grow: 1;
		}
</style>
