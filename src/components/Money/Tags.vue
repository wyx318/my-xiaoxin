<template>
	<div>
		<div class="tags">
			<div class="new">
				<button @click="create">新增标签</button>
			</div>
			<ul class="current">
				<li v-for="tag in dataSource" :key="tag.id"
						:class="{selected:selectedTags.indexOf(tag) >= 0 } "
						@click="toggle(tag)">{{tag.name}}
				</li>
			</ul>
		</div>
	
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component, Prop } from 'vue-property-decorator';

	@Component
	export default class Tags extends Vue {
		// readonly 只读数据
		@Prop() readonly dataSource: string[] | undefined;
		selectedTags: string[] = [];

		toggle(tag: string) {
			const index = this.selectedTags.indexOf(tag);
			if (index >= 0) {
				this.selectedTags.splice(index, 1);
			} else {
				this.selectedTags.push(tag);
			}
			this.$emit('update:value', this.selectedTags);
		}

		//新增标签
		create() {
			const name = window.prompt('请输入新增标签');
			if (name === '') {
				window.alert('标签名不能为空');
			} else if (this.dataSource) {
				//逻辑 当新增的数据不为空 就会把更新动作告诉外部  外部就会接受 update事件 触发。sync 事件 在Money.vue中 就会把数据数组 之前的数据 从而更新
				this.$emit('update:dataSource', [...this.dataSource, name]);
			}
		}
	}
</script>

<style scoped lang="scss">
	.tags {
		background: white;
		flex-grow: 1;
		font-size: 14px;
		padding: 16px;
		display: flex;
		flex-direction: column-reverse;
		
		> .current {
			display: flex;
			flex-wrap: wrap;
			
			> li {
				$bg: #d9d9d9;
				background: $bg;
				$h: 24px;
				height: $h;
				line-height: $h;
				border-radius: $h/2;
				padding: 0 16px;
				margin-right: 12px;
				margin-top: 4px;
				
				&.selected {
					background: darken($bg, 25%);
					color: #fff;
					}
				}
			}
		
		> .new {
			padding-top: 16px;
			
			button {
				background: transparent; //透明色
				border: none;
				border-bottom: 1px solid;
				color: #999;
				padding: 0 3px;
				}
			}
		}
</style>
