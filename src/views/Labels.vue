<template>
	<div>
		<Layout>
			<div class="tags">
				<router-link class="tag"
										 v-for="tag in tags" :key="tag.id"
										 :to="`/labels/edit/${tag.id}`">
					<span>{{tag.name}}</span>
					<Icon name="right"/>
				</router-link>
			</div>
			<div class="createTag-Wrapper">
				<button class="createTag" @click="createTag">新建标签</button>
			</div>
		</Layout>
	</div>
</template>

<script lang="ts">

	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';
	import tagListModel from '@/models/tagListModel';

	tagListModel.fetch();
	@Component
	export default class Labels extends Vue {
		tags = tagListModel.data;

//用户输入函数
		createTag() {
			const name = window.prompt('请输入内容');
			if (name) {
				const message = tagListModel.create(name);
				if (message === 'duplicated') {
					window.alert('重复输入 ');
				} else if (message === 'success') {
					window.alert('添加成功 ');
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tags {
		background: white;
		font-size: 16px;
		padding-left: 16px;
		
		> .tag {
			min-height: 44px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #E6E6E6;
			
			svg {
				width: 15px;
				height: 15px;
				color: #666;
				margin-right: 15px;
				}
			}
		}
	
	.createTag {
		background: #767676;
		color: white;
		border-radius: 4px;
		border: none;
		height: 40px;
		padding: 0 16px;
		
		&-Wrapper {
			text-align: center;
			padding: 16px;
			margin-top: 44-16px;
			}
		}
</style>
