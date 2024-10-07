"use client";
import { useState, useRef } from "react";
import { fetcher } from "@/util/fetcher";
import { grilFromBlob } from "../../types";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
	const [image, setImage] = useState<{ url: URL; pathname: string } | null>();
	const { data: grils, error, isLoading } = useSWR("/api/grils", fetcher);
	const dialogRef = useRef<HTMLDialogElement>(null);

	if (isLoading) {
		return <span>Loading grils...</span>;
	}

	if (error) {
		<h1>Something went wrong while looking for waifus :c (its over)</h1>;
	}

	if (grils) {
		return (
			<section className="flex flex-wrap justify-center gap-4">
				<dialog
					ref={dialogRef}
					className="p-0 border-none"
					onClick={(e) => {
						if (e.target === dialogRef.current) {
							setImage(null);
							dialogRef.current?.close();
						}
					}}
				>
					{image && (
						<Image
							src={image.url.toString()}
							alt={image.pathname}
							height={500}
							width={500}
						/>
					)}
				</dialog>
				{grils &&
					grils.blobs.map((image: grilFromBlob) => {
						return (
							<div
								key={crypto.randomUUID().toString()}
								className="w-[300px] h-[300px]"
							>
								<Image
									className="h-full object-cover"
									alt={image.pathname}
									src={image.url.toString()}
									// Note to self:
									// Remember, it's more about saying the rough
									// ratio of the image AFTER it's been CSS'd.
									// Were just saying "Hey, optimize these to be
									// about 300x400" (If I understand correctly)
									height={300}
									width={300}
									onClick={() => {
										setImage({
											pathname: image.pathname,
											url: image.url,
										});

										if (dialogRef.current) {
											dialogRef.current.showModal();
										}
									}}
								/>
							</div>
						);
					})}
			</section>
		);
	}
}
