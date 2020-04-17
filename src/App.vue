<template>
	<div id="app">
		<router-view/>
		<hr>
	</div>
</template>

<style lang="scss">
	//默认样式
	@import '~@/assets/style/reset.scss';
	//引入字体
	@import '~@/assets/style/helper.scss';
	
	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #333;
		//使用font-css中文字库
		font-family: $font-hei;
		line-height: 1.5;
		}
</style>
