import { randomUUID } from "crypto";
import { waifus } from "../api/waifus";
import Image from "next/image";

export default async function page() {
	const manyGrils = await waifus.getImages("sfw", "dance");
	console.log(manyGrils);

	return (
		<>
			<span>cute grils repo</span>
			<ul className="flex flex-col gap-2">
				{manyGrils &&
					manyGrils.files.map((url) => {
						return (
							<li key={randomUUID()}>
								<Image
									src={url.toString()}
									alt={"cute gril"}
									height={300}
									width={450}
								/>
							</li>
						);
					})}
			</ul>
		</>
	);
}
