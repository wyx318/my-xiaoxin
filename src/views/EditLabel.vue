<template>
	<Layout>
		<div>
			<Icon name="left"/>
			<span>编辑标签</span>
		</div>
		<Notes placeholder="请输入标签名" field-name="标签名"/>
	</Layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';
	import tagListModel from '@/models/tagListModel';
	import Notes from '@/components/Money/Notes.vue';

	@Component({
		components: { Notes }
	})
	export default class EditLabel extends Vue {
		created() {
			const id = this.$route.params.id;
			tagListModel.fetch();
			const tags = tagListModel.fetch();
			const tag = tags.filter(t => t.id === id)[0];
			if (tag) {
				console.log(tag);
			} else {
				//不存在就重新定向 和$route的区别是 $route获取路由信息 $router 路由器
				this.$router.replace('/404');
			}

		}
	}
</script>

<style scoped lang="scss">

</style>
