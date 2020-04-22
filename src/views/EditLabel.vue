<template>
	<Layout>
		<div class="navBar">
			<Icon class="leftIcon" name="left" @click="goBack"/>
			<span class="title">编辑标签</span>
			<span class="rightIcon"></span>
		</div>
		<div class="from-wrapper">
			<FromItem :value="tag.name"
								@update:value="update"
								placeholder="请输入标签名" field-name="标签名"/>
		</div>
		<div class="button-wrapper">
			<Button @click="remove"> 删除标签</Button>
		</div>
	</Layout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';
	import tagListModel from '@/models/tagListModel';
	import FromItem from '@/components/Money/FromItem.vue';
	import Button from '@/components/Button.vue';

	@Component({
		components: { Button, FromItem }
	})
	export default class EditLabel extends Vue {
		tag?: { id: string, name: string } = undefined;

		created() {
			const id = this.$route.params.id;
			tagListModel.fetch();
			const tags = tagListModel.fetch();
			const tag = tags.filter(t => t.id === id)[0];
			if (tag) {
				this.tag = tag;
			} else {
				//不存在就重新定向 和$route的区别是 $route获取路由信息 $router 路由器
				this.$router.replace('/404');
			}
		}

		update(name: string) {
			if (this.tag) {
				tagListModel.update(this.tag.id, name);
			}
		}

		remove() {
			if (this.tag) {
				if (tagListModel.remove(this.tag.id)) {
					this.$router.back();
				}
			}
		}

		goBack() {
			this.$router.back();
		}
	}
</script>

<style scoped lang="scss">
	.navBar {
		text-align: center;
		font-size: 16px;
		padding: 12px 16px;
		background: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		> .leftIcon {
			width: 24px;
			height: 24px;
			}
		
		> .rightIcon {
			width: 24px;
			height: 24px;
			}
		
		> .title {
			
			}
		}
	
	.from-wrapper {
		background: white;
		margin-top: 8px;
		}
	
	.button-wrapper {
		text-align: center;
		padding: 16px;
		margin-top: 44-16px;
		
		}
</style>
