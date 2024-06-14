import Image from "next/image";
import wife from "@/img/bocchi my wife.jpg";
import btr from "@/img/5axsuemr1a6b1.webp";

export default function Home() {
	return (
		<section className="flex flex-col grow basis-0 items-center">
			<span>
				Men will take literally one look at this and say &#34;wife!!!&#34;
			</span>
			<Image
				className="object-scale-down w-1/2"
				alt="cute gril bocchi"
				src={wife}
			/>
			<Image className="object-scale-down w-1/2" alt="btr" src={btr} />
		</section>
	);
}
