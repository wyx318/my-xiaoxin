<template>
	<nav>
		<router-link to="/money" class="item" active-class="selected">
			<Icon name="money"/>
			记账
		</router-link>
		<router-link to="/labels" class="item" active-class="selected">
			<Icon name="lable"/>
			标签
		</router-link>
		<router-link to="/statistics" class="item" active-class="selected">
			<Icon name="statistics"/>
			统计
		</router-link>
	</nav>
</template>

<script lang="ts">


  export default {
    name: 'Nav'
  };
</script>

<style scoped lang="scss">
	@import "~@/assets/style/helper.scss";
	
	nav {
		display: flex;
		box-shadow: 0 0 3px rgba(0, 0, 0, .35);
		flex-direction: row;
		
		> .item {
			padding: 2px 0;
			width: 33.3333%;
			/*flex: 1; 效果上面的一样*/
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			font-size: 12px;
			
			.icon {
				width: 32px;
				height: 32px;
				}
			}
		
		> .item.selected {
			color: $color-highlihht;
			}
		}


</style>
