//MVC 模式 优化代码 数据处理中心
import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
	id: string;
	name: string;
}
//集中声明
type TagListModel = {
	data: Tag[]
	fetch: () => Tag[] //是一个函数 返回的是字符串数组
	create: (name: string) => 'success' | 'duplicated' // 联合类型// success 成功 duplicated 表示 重复
	update: (id: string, name: string) => 'success' | 'not Found' | 'duplicated'
	remove: (id: string) => boolean
	save: () => void //不返回
}
const tagListModel: TagListModel = {
	data: [],
//  获取数据
	fetch() {
		this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
		return this.data;
	},
//收集用户输入的数据
	create(name) {

		const names = this.data.map(item => item.name);
		if (names.indexOf(name) >= 0) {return 'duplicated';}
		// @ts-ignore
		const id = createId().toString();
		this.data.push({ id, name: name });
		this.save();
		return 'success';
	},
	//收集 EditLabel组件的 id 更新ID
	update(id, name) {
		const idList = this.data.map(item => item.id);
		if (idList.indexOf(id) >= 0) {
			const names = this.data.map(item => item.name);
			if (names.indexOf(name) >= 0) {
				return 'duplicated';
			} else {
				const tag = this.data.filter(item => item.id === id)[0];
				tag.name = name;
				tag.id = id;
				this.save();
				return 'success';
			}
		} else {
			return 'not Found';
		}
	},
	//删除数据
	remove(id: string) {
		let index = -1;
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i].id === id) {
				index = i;
				break;
			} else {
				window.alert('删除失败');
			}
		}
		this.data.splice(index, 1);
		this.save();
		return true;
	},
//  保存数据
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
