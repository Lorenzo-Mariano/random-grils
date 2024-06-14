export const waifus = {
	getImage: async (
		type: "sfw" | "nsfw",
		category: string
	): Promise<{ url: URL } | undefined> => {
		if (!type || !category) return;

		return await fetch(`https://api.waifu.pics/${type}/${category}`).then(
			(res) => res.json()
		);
	},

	getImages: async (
		type: "sfw" | "nsfw",
		category: string
	): Promise<{ files: URL[] } | undefined> => {
		if (!type || !category) return;

		return await fetch(`https://api.waifu.pics/many/${type}/${category}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ type, category }),
		}).then((res) => res.json());
	},
};
