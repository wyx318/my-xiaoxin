<template>
	<div>
		<ul class="types">
			<li :class="type === '-' && 'selected' "
					@click="selectType('-')">支出
			</li>
			<li :class="type === '+' && 'selected' "
					@click="selectType('+')">收入
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	// 用ts实现
	import Vue from 'vue';
	//第一步 先引入装饰器 从非官方组件中引入  名为Component 装饰器
	import { Component, Prop } from 'vue-property-decorator';
	//将装饰器修饰到 Types上  就可以 直接写 data  methods
	@Component
	export default class Types extends Vue {
		type = '-';  // '-'表示支出 '+'表示收入

		@Prop(Number) xxx: number | undefined;
		//Prop 告诉Vue xxx 不是data 是 prop
		//Number 告诉Vue xxx 运行时 是个Number
		// xxx 属性名
		// number | undefined 告诉 TS xxx编译时的类型
		selectType(type: string) {
			// type只能是减号或者加号
			if (type !== '-' && type !== '+') {
				throw new Error('type is unknown');
			}
			this.type = type;
		}

		mounted() {
			if (this.xxx === undefined) {
				console.log('没有xxx');
			} else {
				console.log(this.xxx.toString());
			}
		}
	}

	// export default {
	//   props: ['xxx'],
	//   name: 'Types',
	//   data() {
	//     return {
	//       type: '-' // '-'表示支出 '+'表示收入
	//     };
	//   },
	//   mounted() {
	//     console.log(this.xxx);
	//   },
	//   methods: {
	//     selectType: function (type) { //type只能是减号或者加号
	//       if (type !== '-' && type !== '+') {
	//         throw new Error('type is unknown');
	//       }
	//       this.type = type;
	//     }
	//   }
	// };
</script>

<style scoped lang="scss">
	.types {
		background: #c4c4c4;
		display: flex;
		text-align: center;
		font-size: 24px;
		
		> li {
			/*flex: 1;*/
			width: 50%;
			line-height: 64px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			
			&.selected::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				background: #333333;
				}
			}
		}
</style>
