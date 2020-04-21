//MVC 模式 优化代码
const localStorageKeyName = 'tagList';
type Tag = {
	id: string;
	name: string;
}
//集中声明
type TagListModel = {
	data: Tag[]
	fetch: () => Tag[] //是一个函数 返回的是字符串数组
	create: (name : string) => 'success' | 'duplicated' // 联合类型// success 成功 duplicated 表示 重复
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
		this.data.push({ id: name, name: name });
		this.save();
		return 'success';
	},
//  保存数据
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
