<script setup>
	const emit = defineEmits(['result'])

	const inputSearch = ref(null)
	const searchButton = ref(null)
	const search = reactive({
		movieName: '',
	})
	const results = ref([])

	async function handleSubmitSearch(e) {
		e.preventDefault()
		results.value = await $fetch(`/api/torrent/thehiddenbay?query=${search.movieName}`)

		emit('result', results.value)
	}

	watchEffect(() => {
		if (inputSearch.value && inputSearch.value.clientHeight) {
			searchButton.value.style.height = inputSearch.value.clientHeight + 'px'
		}
	})
</script>

<template>
	<form @submit="handleSubmitSearch">
		<div class="flex items-end">
			<div class="flex flex-col">
				<label for="search" class="m-b-16 text-size-24">What are you looking for?</label>
				<input
					id="search"
					ref="inputSearch"
					v-model="search.movieName"
					type="text"
					placeholder="type here..."
					class="text-size-32 p-y-12 p-x-16 b-rd-8 min-w-80vh bg-tf-dark-gray-500 placeholder-tf-dark-gray-300 placeholder-text-size-32 outline-none"
				/>
			</div>
			<button
				ref="searchButton"
				type="submit"
				class="p-x-32 b-rd-8 bg-tf-dark-gray-500 text-size-24 hover:bg-tf-slate-green-300 ml-8"
			>
				Search
			</button>
		</div>
	</form>
</template>
