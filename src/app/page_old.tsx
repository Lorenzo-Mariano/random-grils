import { list } from "@vercel/blob";
import { randomUUID } from "crypto";
import Image from "next/image";

export default async function Home() {
	const grils = await list();
	console.log(grils);

	return (
		<>
			<section className="flex flex-wrap justify-center gap-4">
				<dialog></dialog>
				{grils &&
					grils.blobs.map((image) => {
						return (
							<div
								key={randomUUID().toString()}
								className="w-[300px] h-[300px]"
							>
								<Image
									className="h-full object-cover"
									alt={image.pathname}
									src={image.url}
									// Note to self:
									// Remember, it's more about saying the rough
									// ratio of the image AFTER it's been CSS'd.
									// Were just saying "Hey, optimize these to be
									// about 300x400" (If I understand correctly)
									height={300}
									width={300}
								/>
							</div>
						);
					})}
			</section>
		</>
	);
}
