<script setup>
	defineProps({
		result: {
			type: Object,
			required: true,
		},
		hideFooter: {
			type: Boolean,
			default: false,
		},
	})
</script>

<template>
	<div class="flex h-full flex-col justify-between">
		<main class="m-y-16">
			<p>
				<span class="fw-500">Nome:</span>
				{{ result.name }}
			</p>
			<p>
				<span class="fw-500">Tamanho:</span>
				{{ result.dateUploaded }}
			</p>
			<p>
				<span class="fw-500">Data de upload:</span>
				{{ result.dateUploaded }}
			</p>
			<p>
				<span class="fw-500">Categoria:</span>
				{{ result.category }}
			</p>
			<p>
				<span class="fw-500">Seeders:</span>
				{{ result.seeders }}
			</p>
			<p>
				<span class="fw-500">Leechers:</span>
				{{ result.leechers }}
			</p>
			<p>
				<span class="fw-500">Enviado por:</span>
				{{ result.uploadedBy }}
			</p>
			<p>
				<span class="fw-500">Origem:</span>
				{{ result.source }}
			</p>
		</main>
		<footer v-if="!hideFooter" class="text-white">
			<a
				:href="result.url"
				class="button p-y-12 flex w-full items-center justify-center text-center"
				target="_blank"
			>
				Ver resultado
			</a>
		</footer>
	</div>
</template>
