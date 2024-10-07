import { randomUUID } from "crypto";
import { waifus } from "../api/waifus";
import Image from "next/image";

export default async function page() {
	const manyGrils = await waifus.getImages("sfw", "dance");
	console.log(manyGrils);

	return (
		<>
			<span>cute grils repo</span>
			<div className="flex flex-row flex-wrap gap-2 justify-center">
				{manyGrils &&
					manyGrils.files.map((url) => {
						return (
							<div key={randomUUID()}>
								<Image
									src={url.toString()}
									alt={"cute gril"}
									height={300}
									width={450}
								/>
							</div>
						);
					})}
			</div>
		</>
	);
}
