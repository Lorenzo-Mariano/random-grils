import { waifus } from "../api/waifus";
import Image from "next/image";
import Link from "next/link";

export default async function NavBar() {
	const randomGril = await waifus.getImage("sfw", "cringe");

	return (
		<nav className="flex flex-col grow basis-0 p-4 bg-neutral-900">
			<section className="flex flex-col grow gap-4 justify-between bg-neutral-950 rounded-lg overflow-y-clip">
				<div className="flex flex-col p-4 pb-0 gap-2">
					<span className="text-xl font-semibold">random NEXT thing</span>
					<Link href={"/"}>poecket monsters pics (real)</Link>
					<Link href={"/cute-grils"}>CUTE ANIME GRIL PICS</Link>
					<Link href={"/shite"}>
						random unrelated products not used for nefarious purposes
					</Link>
					<Link href={"/cooking"}>Let me cook!!!</Link>
				</div>

				{randomGril && (
					<>
						<Image
							className="w-full"
							src={randomGril.url.toString()}
							alt="random cute gril"
							// it seems you can just guess.
							// width is more important, then
							// you can literally put whatever
							// for the image height. height
							// will adjust proportionally. no
							// styles needed.
							height={248}
							width={220}
						/>
					</>
				)}
			</section>
		</nav>
	);
}
