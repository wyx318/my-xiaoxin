<template>
	<div>
		<label class="formItem">
			<span class="name">{{this.fieldName}}</span>
			<input type="text"
						 :value="value"
						 @input="onValueChange($event.target.value)"
						 :placeholder="placeholder">
		</label>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component, Prop } from 'vue-property-decorator';

	@Component
	export default class FromItem extends Vue {
		@Prop({ default: '' }) readonly value!: string;

		@Prop({ required: true }) fieldName!: string;
		@Prop() placeholder?: string;

		// @Watch('value') 因为 input 的值一旦被用户变化，就会触发 @update:value 事件，所以就没必要再加一个 watch 了
		onValueChange(value: string) {
			this.$emit('update:value', value);
		}
	}
</script>

<style scoped lang="scss">
	.formItem {
		/*background: #f5f5f5;*/
		font-size: 14px;
		display: flex;
		align-items: center;
		padding-left: 16px;
		
		.name {
			padding-right: 16px;
			}
		
		input {
			height: 40px;
			flex-grow: 1;
			background: transparent; //变透明
			border: none;
			padding-right: 16px;
			}
		}
</style>
