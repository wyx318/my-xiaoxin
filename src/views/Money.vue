<template>
	<div>
		<Layout class-prefix="layout">
			<!--			布局改为从下往上布局-->
			<div class="numberPad">
				<div class="output">100</div>
				<div class="buttons clearfix">
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>删除</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>清空</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button class="ok">OK</button>
					<button class="zero">0</button>
					<button>.</button>
				</div>
			</div>
			<div>
				<ul class="types">
					<li class="selected">支出</li>
					<li>收入</li>
				</ul>
			</div>
			<div>
				<label class="notes">
					<span class="name">备注</span>
					<input type="text" placeholder="请输入">
				</label>
			</div>
			<div>
				<div class="tags">
					<div class="new">
						<button>新增标签</button>
					</div>
					<ul class="current">
						<li>衣</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
						<li>衣</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
						<li>衣</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
						<li>衣</li>
						<li>食</li>
						<li>住</li>
						<li>行</li>
					
					</ul>
				
				</div>
			
			</div>
		</Layout>
	</div>
</template>

<script lang="ts">

  export default {
    name: 'Money',
  };
</script>
<style lang="scss">
	.layout-content {
		display: flex;
		flex-direction: column-reverse;
		}
</style>
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
	
	.notes {
		background: #f5f5f5;
		font-size: 14px;
		display: flex;
		align-items: center;
		padding-left: 16px;
		
		.name {
			padding-right: 16px;
			}
		
		input {
			height: 64px;
			flex-grow: 1;
			background: transparent; //变透明
			border: none;
			padding-right: 16px;
			}
		}
	
	.tags {
		flex-grow: 1;
		font-size: 14px;
		padding: 16px;
		display: flex;
		flex-direction: column-reverse;
		
		> .current {
			display: flex;
			flex-wrap: wrap;
			
			> li {
				background: #d9d9d9;
				$h: 24px;
				height: $h;
				line-height: $h;
				border-radius: $h/2;
				padding: 0 16px;
				margin-right: 12px;
				margin-top: 4px;
				}
			}
		
		> .new {
			padding-top: 16px;
			
			button {
				background: transparent; //透明色
				border: none;
				border-bottom: 1px solid;
				color: #999;
				padding: 0 3px;
				}
			}
		}

</style>
