<template>
	<div>
		<div>404 当前页面不存在，请检查网址路径是否正确</div>
		<div>
			<router-link to="/">返回首页</router-link>
			<!--			<a href="#/">返回首页</a>-->
		</div>
	</div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound'
  };
</script>

<style scoped lang="scss">

</style>
