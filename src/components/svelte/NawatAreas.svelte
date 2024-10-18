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
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="text-4xl font-extrabold">Áreas de Desenvolvimento</h1>
		<p class="mt-4 text-text/70">
			Na Nawat Games, criamos experiências interativas <span class="text-primary"
				>de forma colaborativa</span
			>, unindo diversas áreas para transformar ideias em jogos. Cada projeto é uma oportunidade de
			aprender, inovar e crescer juntos.
		</p>
	</div>
	<div class="mt-16 flex h-[28rem] items-center justify-between">
		<div class="space-y-4">
			<div
				aria-hidden="true"
				on:mouseenter={() => {
					index = 0;
				}}
				class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-blue-400 p-5 transition-all duration-300 hover:h-40 hover:bg-blue-500/10"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-extrabold">Game Design</span>
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
					class="mt-4 text-[0.925rem] opacity-0 transition delay-300 duration-500 group-hover:opacity-100"
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
					<span class="text-xl font-extrabold">Game Programming</span>
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
					class="mt-4 text-[0.925rem] opacity-0 transition delay-300 duration-500 group-hover:opacity-100"
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
					<span class="text-xl font-extrabold">Game Art</span>
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
					class="mt-4 text-[0.925rem] opacity-0 transition delay-300 duration-500 group-hover:opacity-100"
				>
					Criam o visual dos nossos jogos, desenhando personagens, cenários e todos os elementos que
					compõem o universo visual.
				</p>
			</div>
			<div
				aria-hidden="true"
				on:mouseenter={() => {
					index = 3;
				}}
				class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-orange-400 p-5 transition-all duration-300 hover:h-40 hover:bg-orange-500/10"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-extrabold">Game Sound</span>
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
					class="mt-4 text-[0.925rem] opacity-0 transition delay-300 duration-500 group-hover:opacity-100"
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
				class="group h-[4.2rem] w-[28rem] overflow-hidden rounded-xl border border-fuchsia-400 p-5 transition-all duration-300 hover:h-40 hover:bg-fuchsia-500/10"
			>
				<div class="flex items-center justify-between">
					<span class="text-xl font-extrabold">Design Visual</span>
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
					class="mt-4 text-[0.925rem] opacity-0 transition delay-300 duration-500 group-hover:opacity-100"
				>
					Cuida da identidade visual da Nawat Games, criando materiais gráficos e definindo o estilo
					que representa a nossa marca.
				</p>
			</div>
		</div>
		<div class="relative">
			<svg
				class:opacity-0={index === null}
				class:fill-blue-500={index === 0}
				class:fill-green-500={index === 1}
				class:fill-rose-500={index === 2}
				class:fill-orange-500={index === 3}
				class:fill-fuchsia-500={index === 4}
				class="h-[35rem] transition duration-300 ease-in-out"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d={index != null
						? paths[index]
						: 'M50.8,-69.7C65.3,-59.4,76,-43.8,81.5,-26.5C87,-9.3,87.3,9.6,82,26.9C76.7,44.1,65.7,59.7,51.1,70.6C36.5,81.5,18.2,87.7,0.5,86.9C-17.2,86.2,-34.3,78.5,-49.1,67.7C-63.9,56.8,-76.3,42.8,-82.1,26.4C-87.8,9.9,-86.9,-9,-81.1,-26.2C-75.2,-43.3,-64.6,-58.8,-50.2,-69C-35.9,-79.3,-18,-84.3,0.1,-84.5C18.2,-84.6,36.4,-79.9,50.8,-69.7Z'}
					transform="translate(100 100)"
					style="transition: d 0.3s ease-in-out;"
				/>
			</svg>
			<div class="absolute inset-0 flex items-center justify-center">
				<svg class="h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.4 132.48">
					<path
						d="M179.23 38.39c-.72-.75-2.45-2.57-4.5-2.35-2.28.24-4.02 2.84-4.5 5-.31 1.38-.03 2.2.32 4.27.56 3.36.69 6.38.64 7.8-.12 4.08-1.97 7.12-3.54 9.71-1.57 2.58-2.89 3.87-4.07 4.97-.47-.93-.98-1.85-1.52-2.76 3.95-4.97 4.27-17.97 4.06-23.41-.19-4.69-1.1-11.91-4.66-19.67-2.85-6.2-6.07-9.86-9.81-14.1C144.93.2 141.98-.01 140.88 0c-3.07.04-6.47 2.06-6.75 4.35-.19 1.56 1.14 2.49 4.5 6.96 1.35 1.8 2.5 3.38 3.54 5.05 2.17 3.49 3.26 6.55 4.02 8.7.9 2.55 2.44 6.94 2.73 12.01.36 6.17-1.37 9.08-2.25 12.14-.99-.68-2-1.35-3.05-1.99-.14-.78-.34-1.7-.62-2.79-1.21-4.75-2.69-8.2-3.05-9.05-2.65-6.11-4.08-9.29-7.56-11.81-1.32-.96-3.53-2.56-5.47-1.84-1.95.72-2.76 3.48-2.57 5.52.19 2.05 1.33 2.63 2.57 5.06 1.49 2.91 1.68 5.6 1.75 7.77-10.56-3.82-22.68-6-35.56-6s-25.39 2.25-36.08 6.2c.07-2.19.22-4.96 1.76-7.96 1.25-2.43 2.38-3.01 2.57-5.06.19-2.04-.62-4.8-2.57-5.52-1.93-.72-4.15.88-5.47 1.84-3.48 2.52-4.91 5.71-7.56 11.81-.37.85-1.85 4.3-3.05 9.05-.32 1.27-.54 2.29-.68 3.15-.99.62-1.96 1.27-2.9 1.93-.85-3.18-2.71-6.08-2.34-12.44.3-5.06 1.84-9.46 2.73-12.01.76-2.15 1.85-5.21 4.02-8.7 1.04-1.67 2.19-3.25 3.54-5.05 3.36-4.47 4.69-5.41 4.5-6.96-.27-2.3-3.67-4.32-6.74-4.36-1.1-.02-4.05.2-10.77 7.83-3.73 4.24-6.96 7.9-9.81 14.1-3.57 7.75-4.48 14.98-4.66 19.67-.22 5.57.13 19.08 4.36 23.76a38.79 38.79 0 0 0-1.9 3.6c-1.5-1.49-3.18-2.62-5.32-6.15-1.57-2.58-3.41-5.63-3.54-9.71-.04-1.41.08-4.43.64-7.8.35-2.07.63-2.89.32-4.27-.49-2.16-2.23-4.76-4.5-5-2.05-.22-3.79 1.6-4.5 2.35-4.76 5-8.31 19.78-.96 35.74C7.37 81 14.78 92.93 20.02 91.93c6.18 23.04 36.54 40.54 73.09 40.54s67.03-17.57 73.12-40.68c5.01-1.52 11.15-11.58 13.95-17.67 7.34-15.96 3.8-30.74-.96-35.74ZM77.72 103.78c-.28 1.29-2.53 1.78-7.03 2.75-4.61 1-8.17 1.77-12.01.12-.81-.35-2.92-1.28-4.75-3.34-1.86-2.09-1.57-3.25-3.46-4.86-.75-.64-1.03-.66-4.86-2.46-4.23-1.99-4.48-2.24-4.45-2.46.12-.95 5.53-1.17 9.61-1 3.52.15 8.07.38 13.66 2.34 5.42 1.9 13.9 6.16 13.3 8.91Zm62.4-7.79c-3.83 1.8-4.12 1.82-4.86 2.46-1.89 1.61-1.6 2.77-3.46 4.86-1.83 2.06-3.94 2.99-4.75 3.34-3.85 1.65-7.4.88-12.01-.12-4.5-.98-6.75-1.46-7.03-2.75-.6-2.75 7.88-7.01 13.3-8.91 5.59-1.96 10.14-2.19 13.66-2.34 4.08-.18 9.49.04 9.61 1 .03.22-.22.47-4.45 2.46Z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
