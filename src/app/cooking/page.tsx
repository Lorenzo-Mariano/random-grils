import { randomUUID } from "crypto";
import Image from "next/image";

type Dish = {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	servings: number;
	difficulty: string;
	cuisine: string;
	caloriesPerServing: number;
	tags: string[];
	userId: number;
	image: string;
	rating: number;
	reviewCount: number;
	mealType: string[];
};

export default async function Page() {
	const recipes = await fetch("https://dummyjson.com/recipes", {
		cache: "force-cache",
	}).then((res) => res.json());

	return (
		<>
			<h1>COOKING?</h1>

			<section className="flex flex-wrap gap-12 justify-center items-center p-4">
				{recipes.recipes.map((dish: Dish) => {
					return (
						<div className="flex flex-col max-w-sm gap-1" key={randomUUID()}>
							<span className="text-xl font-semibold">{dish.name}</span>
							<Image
								className="object-scale-down"
								src={`${dish.image}`}
								alt={dish.name}
								height={1000}
								width={1000}
							/>
						</div>
					);
				})}
			</section>
		</>
	);
}
