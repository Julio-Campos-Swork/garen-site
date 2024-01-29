<template>
	<div class="overflow-hidden relative w-full py-0 my-0">
		<div
			:style="imageStyle"
			class="rounded-lg flex transition-all ease-linear w-full duration-500"
		>
			<img
				v-for="image in images"
				:src="image.src"
				:alt="image.altText"
				:class="
					imageClass +
					' ' +
					'block object-cover z-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-linear'
				"
			/>
		</div>

		<div
			class="absolute top-0 h-full w-full justify-between items-center flex px-3 md:px-8"
			v-if="slideControl"
		>
			<svg
				class="cursor-pointer w-8 h-8 lg:w-12 lg:h-12 bg-black/20 rounded-full transition duration-300 ease-out hover:scale-110"
				@click="previousimage()"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="#fff"
			>
				<title>chevron-left</title>
				<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
			</svg>
			<svg
				class="cursor-pointer w-8 h-8 lg:w-12 lg:h-12 bg-black/20 rounded-full transition duration-300 ease-out hover:scale-110"
				@click="nextimage()"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="#fff"
			>
				<title>chevron-right</title>
				<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
			</svg>
		</div>

		<div class="absolute bottom-0 py-4 flex justify-center gap-3 w-full" v-if="hasDots">
			<div
				v-for="circle in circles"
				:key="circle.index"
				@click="selectimage(circle.index)"
				:class="{
					'rounded-full w-2 h-2 lg:w-5 lg:h-5 cursor-pointer': true,
					'bg-white': circle.isActive,
					'bg-blue-400': !circle.isActive,
				}"
			></div>
		</div>
	</div>
</template>
<script setup>
	import { ref, computed } from 'vue'
	const {
		images,
		time = 5000,
		width = 600,
		height = 400,
		slideControl = true,
		hasDots = true,
		sliderTransition = 100,
	} = defineProps({
		images: Array,
		time: Number,
		width: Number,
		height: Number,
		slideControl: Boolean,
		hasDots: Boolean,
		sliderTransition: Number,
	})
	console.log({ images, time, width, height, slideControl, hasDots, sliderTransition })
	const currentimage = ref(0) // Use a ref to track the currentimage image index
	const isSliding = ref(true)
	const imageClass = ref(' ' + `h-[${height}px] w-[${width}px]`)

	const previousimage = () => {
		isSliding.value = false

		if (currentimage.value === 0) {
			currentimage.value = images.length - 1
		} else {
			currentimage.value--
		}
	}

	const nextimage = () => {
		isSliding.value = false

		if (currentimage.value === images.length - 1) {
			currentimage.value = 0
		} else {
			currentimage.value++
		}
	}

	const imageStyle = computed(() => {
		let maxWidth = 0
		if (sliderTransition < 100) {
			maxWidth = (images.length - 2) * sliderTransition + 'px'
		} else {
			maxWidth = ''
		}
		return {
			transform: `translateX(-${currentimage.value * sliderTransition}%)`,
			width: maxWidth,
			margin: '0',
		}
	})

	const circles = computed(() => {
		return images.map((s, i) => {
			return {
				index: i,
				isActive: i === currentimage.value,
			}
		})
	})
	const selectimage = (index) => {
		currentimage.value = index
		isSliding.value = false
	}

	setInterval(() => {
		if (isSliding.value) {
			if (currentimage.value < images.length - 1) {
				currentimage.value++
			} else {
				currentimage.value = 0
			}
		} else {
			isSliding.value = true
		}
	}, time)
</script>

<style scoped></style>
