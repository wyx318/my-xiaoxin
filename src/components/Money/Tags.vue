<template>
	<div>
		<div class="tags">
			<div class="new">
				<button>新增标签</button>
			</div>
			<ul class="current">
				<li v-for="tag in dataSource" :key="tag "
						:class="{selected:selectedTags.indexOf(tag) >= 0 } "
						@click="toggle(tag)">{{tag}}
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

		@Prop() dataSource: string[] | undefined;
		selectedTags: string[] = [];

		toggle(tag: string) {
			const index = this.selectedTags.indexOf(tag);
			if (index >= 0) {
				this.selectedTags.splice(index, 1);
			} else {
				this.selectedTags.push(tag);
			}
		}
	}
</script>

<style scoped lang="scss">
	.tags {
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
