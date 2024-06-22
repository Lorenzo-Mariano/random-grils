/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pdcyuo0zxamluo0c.public.blob.vercel-storage.com",
			},
			{
				protocol: "https",
				hostname: "cdn.dummyjson.com",
				port: "",
				pathname: "/recipe-images/**",
			},
			{
				protocol: "https",
				hostname: "cdn.nekosapi.com",
				port: "",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "i.waifu.pics",
				port: "",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
