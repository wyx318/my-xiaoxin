type RecordItem = {
	tags: string[]
	notes: string
	type: string
	amount: number  //数据类型  object  | string
	createAT?: Date // 类  / 构造函数 ?
}
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

interface Window {
	tagList: Tag[]
}
