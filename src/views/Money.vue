<template>
	<diV class="nav-wrapper">
		<div class="content">
			Money.Vue
		</div>
		<Nav/>
	</diV>
</template>

<script lang="ts">

  export default {
    name: 'Money',
  };
</script>

<style scoped lang="scss">
	.nav-wrapper {
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: auto;
		}
	
	.content {
		flex-grow: 1;
		}
</style>
