import Image from "next/image";
import wife from "../../public/img/bocchi my wife.jpg";

export default function Home() {
	return (
		<main className="h-lvh">
			<section className="flex flex-col grow h-full justify-center items-center">
				<span>
					Men will take literally one look at this and say &#34;wife!!!&#34;
				</span>
				<Image
					className="object-scale-down h-1/2"
					alt="cute gril bocchi"
					src={wife}
				/>
			</section>
		</main>
	);
}
