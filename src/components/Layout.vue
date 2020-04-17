<template>
	<diV class="nav-wrapper">
		<div class="content">
			<slot/>
		</div>
		<Nav/>
	</diV>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style scoped lang="scss">
	.nav-wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: auto;
		}
	
	.content {
		flex-grow: 1;
		}
</style>
