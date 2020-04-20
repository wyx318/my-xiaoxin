<template>
	<div>
		<Layout class-prefix="layout">
			<!--			布局改为从下往上布局 采用组件化方式 提升代码 -->
			<NumberPad/>
			<Types/>
			<Notes/>
			<Tags :data-source=" tags"/>
		</Layout>
	</div>
</template>

<script>

  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';

  export default {
    name: 'Money',
    components: {Notes, Tags, Types, NumberPad},
    data() {
      return {
        tags: ['衣', '食', '住', '行', '逛街', '彩票']
      }
    }
  };
</script>
<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
		}
</style>
