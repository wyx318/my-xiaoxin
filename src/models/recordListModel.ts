//MVC 模式 优化代码
import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordListModel = {
	data: [] as RecordItem[],
	//克隆数据
	create(record: RecordItem) {
		const record2: RecordItem = clone(record);
		record2.createAT = new Date();
		this.data.push(record2);
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
