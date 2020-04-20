<template>
	<div class="numberPad">
		<div class="output">{{output}}</div>
		<div class="buttons clearfix">
			<button @click="inputContent">1</button>
			<button @click="inputContent">2</button>
			<button @click="inputContent">3</button>
			<button @click="remove">删除</button>
			<button @click="inputContent">4</button>
			<button @click="inputContent">5</button>
			<button @click="inputContent">6</button>
			<button @click="clear">清空</button>
			<button @click="inputContent">7</button>
			<button @click="inputContent">8</button>
			<button @click="inputContent">9</button>
			<button @click="ok" class="ok">OK</button>
			<button @click="inputContent" class="zero">0</button>
			<button @click="inputContent">.</button>
		</div>
	</div>
</template>

<script lang="ts">
	// 用ts实现
	import Vue from 'vue';
	//第一步 先引入装饰器 从非官方组件中引入  名为Component 装饰器
	import { Component } from 'vue-property-decorator';
	//将装饰器修饰到 Types上  就可以 直接写 data  methods
	@Component
	export default class NumberPad extends Vue {
		output: string = '0';

		inputContent(event: MouseEvent) {
			const button = (event.target as HTMLButtonElement);
			// console.log(button.textContent); !是不为空的意思 indexOf(input) >= 0是包含的意思
			const input = button.textContent!;
			//长度判断
			if (this.output.length === 16) {return;}
			//逻辑 当热内容为的时候 且输入的内容包含0123456789 就进行替换为当前输入的数字
			if (this.output === '0') {
				if ('0123456789'.indexOf(input) >= 0) {
					this.output = input;
				} else {
					//否则就加上当前的内容
					this.output += input;
				}
				return;
			}
			//如果内容已经有'.'了 再输入就return
			if (this.output.indexOf('.') >= 0 && input === '.') {return;}
			this.output += input;
		}

		remove() {
			// if (this.output.slice(0, -1).indexOf('.') >= 0) {
			// 	this.output = this.output.slice(0, -1);
			// }
			//逻辑 本来 this.output.length 就是为1  在怎么执行删除 直接就赋值为0 否则执行下一条逻辑
			if (this.output.length === 1) {
				this.output = '0';
			} else {
				this.output = this.output.slice(0, -1);
			}
		}

		clear() {
			this.output = '0';
		}

//确认事件
		ok() {
			this.$emit('update:value', this.output);
			this.$emit('submit', this.output);
		}
	}
</script>

<style scoped lang="scss">
	@import "~@/assets/style/helper.scss";
	
	.numberPad {
		.output {
			@extend %clearFix;
			@extend %innerShadow; //内阴影
			font-size: 36px;
			font-family: Consolas, monospace; //等宽字体 编程字体
			padding: 9px 16px;
			text-align: right;
			height: 72px;
			}
		
		.buttons {
			@extend %clearFix;
			
			> button {
				width: 25%;
				height: 64px;
				float: left;
				background: transparent;
				border: none;
				
				&.ok {
					height: 64*2px;
					float: right;
					}
				
				&.zero {
					width: 25*2%;
					}
				
				$bg: #F2F2F2;
				
				&:nth-child(1) {
					background: $bg;
					}
				
				&:nth-child(2), &:nth-child(5), {
					background: darken($bg, 4%); //颜色函数
					}
				
				&:nth-child(3), &:nth-child(6), &:nth-child(9) {
					background: darken($bg, 4*2%);
					}
				
				&:nth-child(4), &:nth-child(7), &:nth-child(10) {
					background: darken($bg, 4*3%);
					}
				
				&:nth-child(8), &:nth-child(11), &:nth-child(13) {
					background: darken($bg, 4*4%);
					}
				
				&:nth-child(14) {
					background: darken($bg, 4*5%);
					}
				
				&:nth-child(12) {
					background: darken($bg, 4*6%);
					}
				}
			}
		}
</style>
