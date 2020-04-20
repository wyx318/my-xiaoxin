<template>
	<div>
		<Layout class-prefix="layout">
			{{record}}
			<!--			布局改为从下往上布局 采用组件化方式 提升代码 -->
			<NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
			<!--	可以改成修饰符 .sync		@update:value="onUpdateType"-->
			<Types :value.sync='record.type'/>
			<Notes @update:value="onUpdateNotes"/>
			<Tags :data-source.sync=" tags" @update:value="onUpdateTags"/>
		</Layout>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import NumberPad from '@/components/Money/NumberPad.vue';
	import Types from '@/components/Money/Types.vue';
	import Tags from '@/components/Money/Tags.vue';
	import Notes from '@/components/Money/Notes.vue';
	import { Component, Watch } from 'vue-property-decorator';

	//ts 中类型声明
	type Record = {
		tags: string[]
		notes: string
		type: string
		amount: number
	}
	@Component({
		components: { Notes, Tags, Types, NumberPad }
	})
	export default class Money extends Vue {
		tags = ['衣', '食', '住', '行', '逛街', '彩票'];
		//保存用户传递过来的OK 的数据
		recordList: Record[] = [];
		record: Record = {
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

		onUpdateAmount(value: string) {
			// console.log(value); //将数据字符串转换成number
			this.record.amount = parseFloat(value);
		}

		// 点击OK的时候 收集数据  并保存起来
		saveRecord() {
			const record2 = JSON.parse(JSON.stringify(this.record));
			this.recordList.push(record2);
			console.log(this.recordList);

		}

		//动态监听数据
		@Watch('recordList')
		onRecordListChange() {
			window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
		}
	}
</script>
<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
		}
</style>
