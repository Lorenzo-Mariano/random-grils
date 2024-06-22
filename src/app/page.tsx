import { list } from "@vercel/blob";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function Page() {
	const grils = await list();
	const key = randomUUID().toString();
	console.log(key);

	return (
		<>
			<section className="flex flex-wrap justify-center gap-4">
				{grils &&
					grils.blobs.map((image) => {
						return (
							<Image
								key={randomUUID().toString()}
								alt={image.pathname}
								src={`${image.url}?cache-key=${key}`}
								height={400}
								width={400}
							/>
						);
					})}
			</section>
		</>
	);
}
