<template>
	<div class="relative w-full">
		<div
			:style="imageStyle"
			class="rounded-lg flex transition-all ease-linear duration-500"
		>
			<img
				v-for="image in images"
				:src="image.src"
				:alt="image.altText"
				:class="imageClass"
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
	</div>
</template>
<script setup>
	import { ref, computed } from 'vue'
	const { images, time, width, height, slideControl } = defineProps({
		images: Array,
		time: Number,
		width: Number,
		height: Number,
		slideControl: Boolean,
	})
	const currentimage = ref(0) // Use a ref to track the currentimage image index
	const isSliding = ref(false)
	const imageClass = ref('' + ' ' + `h-[${height}px]` + ' ' + `w-[${width}px]`)

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

	const imageStyle = computed(() => ({
		transform: `translateX(-${currentimage.value * 100}%)`,
	}))

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
