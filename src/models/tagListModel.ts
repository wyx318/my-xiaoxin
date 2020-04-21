//MVC 模式 优化代码
const localStorageKeyName = 'tagList';
//集中声明
type TagListModel = {
	data: string[]
	fetch: () => string[] //是一个函数 返回的是字符串数组
	create: (name: string) => 'success' | 'duplicated' // 联合类型// success 成功 duplicated 表示 重复
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
		if (this.data.indexOf(name) >= 0) {return 'duplicated';}
		this.data.push(name);
		this.save();
		return 'success';
	},
//  保存数据
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default tagListModel;
