<template>
	<div>
		<div class="m-y-32 flex justify-center">
			<search-component @result="value => handleResultValue(value)" />
		</div>
		<div class="m-y-16">
			<div v-show="results.length > 0" class="grid grid-cols-4 gap-16">
				<div
					v-for="(result, index) of results"
					:key="index"
					class="b-rd-4 m-b-8 bg-tf-dark-gray-300 p-16 shadow"
				>
					<card-component :result="result" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const results = ref([])

	function handleResultValue(value) {
		results.value = value
	}
</script>
