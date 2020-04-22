<template>
	<div>
		<label class="notes">
			<span class="name">{{this.fieldName}}</span>
			<input type="text"
						 v-model="value"
						 :placeholder="this.placeholder">
		</label>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component, Prop, Watch } from 'vue-property-decorator';

	@Component
	export default class Notes extends Vue {
		value = '';

		@Prop({ required: true }) fieldName!: string;
		@Prop() placeholder?: string;

		@Watch('value')
		onValueChange(value: string) {
			this.$emit('update:value', value);
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
