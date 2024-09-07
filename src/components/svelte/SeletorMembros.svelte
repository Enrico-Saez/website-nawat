<script lang="ts">
	import { membros } from '../../lib/membros.ts';

	let selectedButton: number | null = null;
	let searchString: string = '';

	function onButtonClicked(i: number) {
		if (selectedButton === i) {
			selectedButton = null;
			return;
		}
		selectedButton = i;
	}
</script>

<div class="bg-secondary pb-24 pt-32">
	<div class="text-center">
		<span class="text-xs font-light uppercase tracking-wider">CONHEÇA NOSSOS TALENTOS</span>
		<h1 class="mt-1 text-4xl font-black">Todos os membros</h1>
		<p class="mx-auto mt-5 max-w-lg">
			Todos os membros que já passaram pela Nawat Games, contribuindo com suas ideias e seus
			trabalhos.
		</p>
	</div>
</div>
<div>
	<div class="sticky top-28 z-10">
		<div class="relative mx-auto size-[1px]">
			<div class="absolute -left-[15rem] -top-6">
				<div class="relative h-12 w-[30rem]">
					<input
						bind:value={searchString}
						class="size-full rounded-full bg-text px-7 text-neutral-700 outline-none placeholder:italic focus:ring-0"
						placeholder="Procure por algum membro..."
					/>
					<div class="absolute right-6 top-0 flex h-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 text-neutral-700"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mx-auto max-w-3xl py-16">
		<div class="mx-auto flex justify-between *:rounded-full *:border-2 *:px-4 *:py-1 *:transition">
			<button
				on:click={() => onButtonClicked(0)}
				class="border-blue-400/80 {selectedButton === 0 ? 'btn-selected bg-blue-600' : ''}"
				>Game Design</button
			>
			<button
				on:click={() => onButtonClicked(1)}
				class="border-green-400/80 {selectedButton === 1 ? 'btn-selected bg-green-600' : ''}"
				>Game Programming</button
			>
			<button
				on:click={() => onButtonClicked(2)}
				class="border-rose-400/80 {selectedButton === 2 ? 'btn-selected bg-rose-600' : ''}"
				>Game Art</button
			>
			<button
				on:click={() => onButtonClicked(3)}
				class="border-orange-400/80 {selectedButton === 3 ? 'btn-selected bg-orange-600' : ''}"
				>Game Sound</button
			>
			<button
				on:click={() => onButtonClicked(4)}
				class="border-fuchsia-400/80 {selectedButton === 4 ? 'btn-selected bg-fuchsia-600' : ''}"
				>Design Visual</button
			>
		</div>
	</div>
	<div class="mx-auto max-w-5xl pb-32 pt-8">
		<div class="grid grid-cols-4 gap-10 *:overflow-hidden *:rounded-xl *:transition">
			{#each Object.entries(membros) as [membro, info]}
				{#if (selectedButton != null && info.areas.includes(selectedButton) && info.nome.includes(searchString)) || (!(selectedButton != null) && info.nome.includes(searchString))}
					<a
						class="fade-in h-72 w-full bg-gradient-to-br from-blue-500/70 to-green-500/70 hover:-translate-y-2"
						href="/membro/{membro}"
					>
						<div class="h-3/4"></div>
						<div class="h-1/4 w-full bg-black/70 px-4 py-2.5">
							<span class="font-medium tracking-wide">{info.nome}</span>
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.fade-in {
		animation: fadeIn 0.5s ease-out;
	}

	@keyframes fadeIn {
		0% {
			translate: 0 1rem;
			opacity: 0;
		}
		100% {
			translate: 0;
			opacity: 100;
		}
	}

	.btn-selected {
		animation: buttonSelected 0.5s ease-in-out;
	}

	@keyframes buttonSelected {
		0% {
			translate: 0;
		}
		40% {
			translate: 0 -0.5rem;
		}
		80% {
			translate: 0 0.2rem;
		}
		100% {
			translate: 0;
		}
	}
</style>
