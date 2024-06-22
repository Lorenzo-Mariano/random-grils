"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [blob, setBlob] = useState<PutBlobResult | null>(null);
	return (
		<>
			<h1>ANIME GRIL TRAFFICKING</h1>

			<form
				onSubmit={async (event) => {
					event.preventDefault();
					if (!inputFileRef.current?.files) {
						throw new Error("No file selected");
					}

					const file = inputFileRef.current.files[0];
					const response = await fetch(
						`/api/avatar/upload?filename=${file.name}`,
						{
							method: "POST",
							body: file,
						}
					);

					const newBlob = (await response.json()) as PutBlobResult;
					setBlob(newBlob);
				}}
			>
				<div className="p-4 bg-neutral-700">
					<input name="file" ref={inputFileRef} type="file" required />
					<button className="rounded-lg bg-neutral-800 p-4" type="submit">
						Upload
					</button>
				</div>
			</form>
			{blob && (
				<div>
					Blob url: <a href={blob.url}>{blob.url}</a>
				</div>
			)}
		</>
	);
}
