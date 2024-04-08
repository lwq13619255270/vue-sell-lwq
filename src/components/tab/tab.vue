<template>
  <div class="tab">
		<cube-tab-bar
			ref="tabBar"
			:use-transition= false
			:showSlider = true
			:data="tabs"
			v-model="selectedLabel"
		>
		</cube-tab-bar>
		<div class="slide-wrapper">
			<cube-slide
				ref="slide"
				:initial-index="index"
				:loop="false"
				:auto-play="false"
				:show-dots=false
				:options="slideOptions"
				@scroll="onScroll"
				@change="onChange">
				<cube-slide-item v-for="tab in tabs" :key="tab.id">
					<component ref="component" :is="tab.component" :data="tab.data"></component>
				</cube-slide-item>
			</cube-slide>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'tab',
		props: {
			tabs: {
				type: Array,
				default() {
					return []
				}
			},
			initialIndex: {
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				index: this.initialIndex,
				slideOptions: {
          listenScroll: true,
          probeType: 3,
          directionLockThreshold: 0
        }
			}
		},
		computed: {
			selectedLabel: {
				get () {
					return this.tabs[this.index].label
				},
				set(newVal) {
					this.index = this.tabs.findIndex(value => {
						return value.label === newVal
					})
				}
			}
		},
		methods: {
			onScroll(pos) {
				const tabBarWidth = this.$refs.tabBar.$el.clientWidth
				const slideWidth = this.$refs.slide.slide.scrollerWidth
				const transform = -pos.x / slideWidth * tabBarWidth
				this.$refs.tabBar.setSliderTransform(transform)
			},
			onChange(current) {
        this.index = current
        const instance = this.$refs.component[current]
        if (instance && instance.fetch) {
          instance.fetch()
        }
      }
		}
}
</script>
<style lang="stylus" scoped>
	@import "~common/stylus/variable"

	.tab
		display: flex
		flex-direction: column
		height: 100%
		>>> .cube-tab
			padding: 10px 0
		.slide-wrapper
			flex: 1
			overflow: hidden
</style>
