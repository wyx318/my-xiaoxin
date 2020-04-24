//MVC 模式 优化代码
const localStorageKeyName = 'recordList';

const recordListModel = {
	data: [] as RecordItem[],
	//克隆数据
	clone(data: RecordItem[] | RecordItem) {
		return JSON.parse(JSON.stringify(data));
	},
//  获取数据
	fetch() {
		this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
		return this.data;
	},
//  保存数据
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
	}
};
export default recordListModel;
