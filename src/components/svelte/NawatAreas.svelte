<script lang="ts">
	const paths: string[] = [
		'M31.2,-39.4C43.9,-33.7,60.1,-29.2,69.2,-18.4C78.3,-7.6,80.3,9.6,71.7,19.3C63,29,43.6,31.1,29.9,41.5C16.1,51.8,8.1,70.3,-3.2,74.6C-14.4,79,-28.8,69.2,-44.2,59.4C-59.6,49.6,-76,39.8,-80.5,26.1C-84.9,12.4,-77.4,-5.1,-66.9,-16.9C-56.4,-28.6,-42.9,-34.5,-31.2,-40.6C-19.6,-46.6,-9.8,-52.8,-0.3,-52.5C9.2,-52.1,18.5,-45.1,31.2,-39.4Z',
		'M50.4,-67.8C63.2,-60.2,69.8,-42.5,75.8,-24.5C81.8,-6.5,87.1,11.7,80.6,24.5C74.2,37.3,55.9,44.5,40.5,51C25.1,57.5,12.5,63.2,-3.5,68C-19.6,72.9,-39.1,76.8,-51,69.2C-63,61.6,-67.3,42.4,-63.9,26.9C-60.6,11.4,-49.5,-0.6,-42.5,-11.2C-35.4,-21.8,-32.4,-31.1,-26,-40.8C-19.6,-50.6,-9.8,-60.7,4.5,-66.9C18.8,-73.2,37.7,-75.5,50.4,-67.8Z',
		'M30.5,-36.8C42,-33.8,55.2,-28,57,-19.3C58.9,-10.5,49.3,1.2,42.1,10.7C34.9,20.3,30.2,27.6,23.6,37.6C17,47.5,8.5,60.1,-1.7,62.5C-11.9,64.8,-23.9,57.1,-33.2,48C-42.4,38.9,-49.1,28.5,-57.5,15.6C-66,2.7,-76.3,-12.7,-72.5,-23.3C-68.7,-33.9,-50.8,-39.6,-36.4,-41.6C-21.9,-43.7,-11,-42.1,-0.7,-41.1C9.6,-40.1,19.1,-39.8,30.5,-36.8Z',
		'M45.8,-54.3C61.3,-51.8,77.2,-41,75.7,-28.6C74.2,-16.2,55.4,-2.2,46.6,12.1C37.8,26.4,39.1,40.9,33,49.6C26.9,58.3,13.4,61.1,-2.8,64.9C-19,68.8,-38,73.6,-44.8,65.1C-51.6,56.7,-46.3,35,-49.6,17.8C-52.8,0.6,-64.6,-12.1,-65.7,-25.3C-66.9,-38.5,-57.4,-52.2,-44.6,-55.6C-31.9,-59.1,-15.9,-52.3,-0.4,-51.8C15.1,-51.2,30.3,-56.9,45.8,-54.3Z',
		'M32.6,-47.6C41.4,-38.4,47.4,-27.8,51.3,-16.5C55.2,-5.2,57.1,7,53.8,17.5C50.4,28.1,41.9,37,32.1,43.7C22.2,50.5,11.1,55,-3.1,59.4C-17.4,63.7,-34.8,67.8,-47.7,62C-60.6,56.3,-68.9,40.7,-67.5,26.3C-66.1,12,-55,-1.1,-51.1,-17.6C-47.1,-34.1,-50.4,-53.9,-43.1,-63.7C-35.7,-73.4,-17.9,-73.1,-3,-68.9C11.8,-64.8,23.7,-56.8,32.6,-47.6Z'
	];
	let index: number | null = null;
</script>

<div class="mx-auto max-w-5xl py-32">
	<div>
		<div class="text-center">
			<h1 class="text-4xl font-black">Áreas de Desenvolvimento</h1>
			<p>O desenvolvimento na Nawat é multi...</p>
		</div>
		<div class="mt-24 flex h-[28rem] items-center justify-between">
			<div class="space-y-4">
				<div
					aria-hidden="true"
					on:mouseenter={() => {
						index = 0;
					}}
					class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-blue-400 p-5 transition-all duration-300 hover:h-40"
				>
					<div class="flex items-center justify-between">
						<span class="text-xl font-black">Game Design</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 transition duration-300 group-hover:rotate-90"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
					<p
						class="mt-4 text-[0.925rem] opacity-0 transition delay-500 duration-500 group-hover:opacity-100"
					>
						Desenvolvem as mecânicas e o conceito dos jogos, garantindo uma experiência divertida e
						envolvente para os jogadores.
					</p>
				</div>
				<div
					aria-hidden="true"
					on:mouseenter={() => {
						index = 1;
					}}
					class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-green-400 p-5 transition-all duration-300 hover:h-40 hover:bg-green-500/10"
				>
					<div class="flex items-center justify-between">
						<span class="text-xl font-black">Game Programming</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 transition duration-300 group-hover:rotate-90"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
					<p
						class="mt-4 text-[0.925rem] opacity-0 transition delay-500 duration-500 group-hover:opacity-100"
					>
						Responsáveis por transformar ideias em realidade, desenvolvendo a lógica e o código que
						dão vida aos nossos jogos.
					</p>
				</div>
				<div
					aria-hidden="true"
					on:mouseenter={() => {
						index = 2;
					}}
					class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-rose-400 p-5 transition-all duration-300 hover:h-40 hover:bg-rose-500/10"
				>
					<div class="flex items-center justify-between">
						<span class="text-xl font-black">Game Art</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 transition duration-300 group-hover:rotate-90"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
					<p
						class="mt-4 text-[0.925rem] opacity-0 transition delay-500 duration-500 group-hover:opacity-100"
					>
						Criam o visual dos nossos jogos, desenhando personagens, cenários e todos os elementos
						que compõem o universo visual.
					</p>
				</div>
				<div
					aria-hidden="true"
					on:mouseenter={() => {
						index = 3;
					}}
					class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-orange-400 p-5 transition-all duration-300 hover:h-40"
				>
					<div class="flex items-center justify-between">
						<span class="text-xl font-black">Game Sound</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 transition duration-300 group-hover:rotate-90"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
					<p
						class="mt-4 text-[0.925rem] opacity-0 transition delay-500 duration-500 group-hover:opacity-100"
					>
						Dão voz e atmosfera aos nossos jogos, criando trilhas sonoras e efeitos que enriquecem a
						experiência do jogador.
					</p>
				</div>
				<div
					aria-hidden="true"
					on:mouseenter={() => {
						index = 4;
					}}
					class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-fuchsia-400 p-5 transition-all duration-300 hover:h-40"
				>
					<div class="flex items-center justify-between">
						<span class="text-xl font-black">Design Visual</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6 transition duration-300 group-hover:rotate-90"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</div>
					<p
						class="mt-4 text-[0.925rem] opacity-0 transition delay-500 duration-500 group-hover:opacity-100"
					>
						Cuida da identidade visual da Nawat Games, criando materiais gráficos e definindo o
						estilo que representa a nossa marca.
					</p>
				</div>
			</div>
			<div>
				<svg
					class:fill-blue-500={index === 0}
					class:fill-green-500={index === 1}
					class:fill-rose-500={index === 2}
					class:fill-orange-500={index === 3}
					class:fill-fuchsia-500={index === 4}
					class="h-[30rem] transition duration-300 ease-in-out"
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d={paths[index]}
						transform="translate(100 100)"
						style="transition: d 0.3s ease-in-out;"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
