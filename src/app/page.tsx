import { list } from "@vercel/blob";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function Home() {
	const grils = await list();

	return (
		<>
			<section className="flex flex-wrap justify-center gap-4">
				{grils &&
					grils.blobs.map((image) => {
						return (
							<Image
								key={randomUUID().toString()}
								alt={image.pathname}
								src={image.url}
								height={400}
								width={400}
							/>
						);
					})}
			</section>
		</>
	);
}
