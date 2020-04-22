<template>
	<!--	思路 当点击小button -->
	<button class="button" @click="$emit('click', $event)">
		<slot/>
	</button>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Component } from 'vue-property-decorator';

	@Component
	export default class Button extends Vue {

	}
</script>

<style scoped lang="scss">
	.button {
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
