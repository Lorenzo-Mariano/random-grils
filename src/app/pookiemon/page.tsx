import { randomUUID } from "crypto";
import Image from "next/image";
import wife from "@/img/bocchi my wife.jpg";
import btr from "@/img/5axsuemr1a6b1.webp";

export default async function Home() {
	const pokemonMaybe: {
		count: number;
		next: string | null;
		previous: string | null;
		results: [any];
	} = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10", {
		cache: "force-cache",
	}).then((response) => response.json());

	console.log(pokemonMaybe);

	return (
		<>
			{pokemonMaybe &&
				pokemonMaybe.results.map((pokemon: { name: string; url: string }) => {
					return (
						<div key={randomUUID()}>
							<span>{pokemon.name}</span>
						</div>
					);
				})}
			<span>
				Men will take literally one look at this and say &#34;wife!!!&#34;
			</span>
			<Image
				className="object-scale-down w-1/2"
				alt="cute gril bocchi"
				src={wife}
			/>
			<Image
				className="object-scale-down w-1/2"
				alt="btr bocchi the infantry fighting vehicle"
				src={btr}
			/>
		</>
	);
}
