<template>
	<svg class="icon" @click="$emit('click',$event)">
		<!--		或者这样写 :xlink:href="'#'+name" 一样的 不过下面的更优雅-->
		<use :xlink:href="`#${name}`"></use>
	</svg>
</template>

<script lang="ts">
	// import x from '@/assets/icons/lable.svg';
	// 统一引入该类型所有文件
	let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
	try {importAll(require.context('../assets/icons/', true, /\.svg$/));} catch (e) {console.log(e);}
	export default {
		props: ['name'],
		name: 'Icon'
	};
</script>

<style scoped lang="scss">
	.icon {
		width: 1em;height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		}
</style>
