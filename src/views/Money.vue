<template>
	<div>
		<Layout class-prefix="layout">
			<!--			布局改为从下往上布局 采用组件化方式 提升代码 -->
			<NumberPad/>
			<Types :xxx="333"/>
			<Tags/>
		</Layout>
	</div>
</template>

<script lang="ts">

  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';

  export default {
    name: 'Money',
    components: { Tags, Types, NumberPad },
  };
</script>
<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
		}
</style>
