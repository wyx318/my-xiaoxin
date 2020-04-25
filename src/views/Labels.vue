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
				<Button class="createTag" @click="createTag">新建标签</Button>
			</div>
		</Layout>
	</div>
</template>

<script lang="ts">

	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';
	import Button from '@/components/Button.vue';
	import store from '@/store/index2';

	@Component({
		components: { Button }
	})
	export default class Labels extends Vue {
		//已经放到全局数据中心了
		tags =  store.tagList;

//用户输入函数
		createTag() {
			const name = window.prompt('请输入内容');
			if (name) {
				store.createTag(name);
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
