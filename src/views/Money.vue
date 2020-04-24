<template>
	<div>
		<Layout class-prefix="layout">
			<!--			布局改为从下往上 布局 采用组件化方式 提升代码 -->
			<NumberPad :value.sync="record.amount" @submit="saveRecord"/>
			<!--	可以改成修饰符 .sync		@update:value="onUpdateType"-->
			<Types :value.sync='record.type'/>
			<div class="notes">
				<FromItem field-name="备注"
									placeholder="在这里输入备注"
									@update:value="onUpdateNotes"/>
			</div>
			<Tags :data-source.sync=" tags" @update:value="onUpdateTags"/>
		</Layout>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import NumberPad from '@/components/Money/NumberPad.vue';
	import Types from '@/components/Money/Types.vue';
	import Tags from '@/components/Money/Tags.vue';
	import FromItem from '@/components/Money/FromItem.vue';
	import { Component, Watch } from 'vue-property-decorator';
	import recordListModel from '@/models/recordListModel';
	//引入 优化代码 MVC
	// const model = require('@/model.js').model;
	//后台数据库版本
	// window.localStorage.setItem('version', '0.0.1');
	const recordList = recordListModel.fetch();
	//ts 中类型声明

	@Component({
		components: { FromItem, Tags, Types, NumberPad }
	})
	export default class Money extends Vue {
		tags = window.tagList;
		//保存用户传递过来的OK 的数据 后台读取浏览器存储的数据
		recordList: RecordItem[] = recordList;
		record: RecordItem = {
			tags: [], notes: '', type: '-', amount: 0
		};

		//自定义事件 收集数据
		onUpdateTags(value: string[]) {
			// console.log(value);
			this.record.tags = value;
		}

		//收集备注
		onUpdateNotes(value: string) {
			// console.log(value);
			this.record.notes = value;
		}

		//支出数据  直接简写成 .sync 修饰符
		// onUpdateType(value: string) {
		// 	// console.log(value);
		// 	this.record.type = value;
		// }

		// onUpdateAmount(value: string) {
		// 	// console.log(value); //将数据字符串转换成number
		// 	this.record.amount = parseFloat(value);
		// }

		// 点击OK的时候 收集数据  并保存起来
		saveRecord() {
			recordListModel.create(this.record);
			// console.log(this.recordList);

		}

		//动态监听数据
		@Watch('recordList')
		onRecordListChange() {
			recordListModel.save();
		}
	}
</script>
<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
		}
	
	.notes {
		padding: 12px 0;
		}
</style>
