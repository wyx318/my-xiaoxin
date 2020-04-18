<template>
	<div>
		<ul class="types">
			<li :class="type === '-' && 'selected' "
					@click="selectType('-')">支出
			</li>
			<li :class="type === '+' && 'selected' "
					@click="selectType('+')">收入
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
  export default {
    props: ['xxx'],
    name: 'Types',
    data() {
      return {
        type: '-' // '-'表示支出 '+'表示收入
      };
    },
    mounted() {
      console.log(this.xxx);
    },
    methods: {
      selectType: function (type) { //type只能是减号或者加号
        if (type !== '-' && type !== '+') {
          throw new Error('type is unknown');
        }
        this.type = type;
      }
    }
  };
</script>

<style scoped lang="scss">
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
</style>
