<script lang="ts">
	import { membros } from '../../lib/membros.ts';
</script>

<div class="bg-secondary py-16 pb-24">
	<div class="text-center">
		<span class="text-xs font-light uppercase tracking-wider">CONHEÇA NOSSOS TALENTOS</span>
		<h1 class="mt-1 text-4xl font-black">Todos os membros</h1>
		<p class="mx-auto mt-5 max-w-lg">
			Todos os membros que já passaram pela Nawat Games, contribuindo com suas ideias e seus
			trabalhos.
		</p>
	</div>
</div>
<div class="sticky top-28">
	<div class="relative mx-auto size-[1px]">
		<div class="absolute -left-[15rem] -top-6">
			<div class="relative h-12 w-[30rem]">
				<input
					class="size-full rounded-full bg-text px-7 text-neutral-700 placeholder:italic focus:ring-0"
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
	<div class="mx-auto flex justify-between *:rounded-full *:px-4 *:py-1">
		<button class="bg-blue-500/80">Game Design</button>
		<button class="bg-green-500/80">Game Programming</button>
		<button class="bg-rose-500/80">Game Art</button>
		<button class="bg-orange-500/80">Game Sound</button>
		<button class="bg-fuchsia-500/80">Design Visual</button>
	</div>
</div>
<div class="mx-auto max-w-5xl pb-32 pt-8">
	<div class="grid grid-cols-4 gap-10 *:overflow-hidden *:rounded-xl *:border-2 *:border-accent/20">
		{#each Object.entries(membros) as [membro, info]}
			<a href="/membro/{membro}">
				<div class="fade-in h-72 w-full bg-neutral-500">
					<div class="h-3/4"></div>
					<div class="h-1/4 w-full bg-black px-4 py-2">
						<span class="font-medium tracking-wide">{info.nome}</span>
					</div>
				</div>
			</a>
		{/each}
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
</style>
