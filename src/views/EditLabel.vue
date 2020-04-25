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
	import FromItem from '@/components/Money/FromItem.vue';
	import Button from '@/components/Button.vue';
	import store from '@/store/index2';

	@Component({
		components: { Button, FromItem }
	})
	export default class EditLabel extends Vue {
		tag?: Tag = undefined;

		created() {
			this.tag = store.findTag(this.$route.params.id);
			if (!this.tag) {
				//不存在就重新定向 和$route的区别是 $route获取路由信 息 $router 路由器
				this.$router.replace('/404');
			}
		}

		update(name: string) {
			if (this.tag) {
				store.updateTag(this.tag.id, name);
			}
		}

		remove() {
			if (this.tag) {
				if (store.removeTag(this.tag.id)) {
					this.$router.back();
				} else {
					// window.alert('删除失败');
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
