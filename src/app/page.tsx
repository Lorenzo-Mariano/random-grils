import { list } from "@vercel/blob";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function Page() {
	const grils = await list();
	console.log(grils);

	return (
		<>
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
		</>
	);
}
