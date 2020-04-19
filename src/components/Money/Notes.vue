<template>
	<div>
		<label class="notes">
			<span class="name">备注</span>
			<input type="text" :value="value"
						 @input="onInput"
						 placeholder="请输入">
		</label>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';

	@Component
	export default class Notes extends Vue {
		value = '';

		onInput(event: KeyboardEvent) {
			const input = event.target as HTMLInputElement;
			this.value = input.value;
		}
	}
</script>

<style scoped lang="scss">
	.notes {
		background: #f5f5f5;
		font-size: 14px;
		display: flex;
		align-items: center;
		padding-left: 16px;
		
		.name {
			padding-right: 16px;
			}
		
		input {
			height: 64px;
			flex-grow: 1;
			background: transparent; //变透明
			border: none;
			padding-right: 16px;
			}
		}
</style>
