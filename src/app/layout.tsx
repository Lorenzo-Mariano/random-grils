import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import NavBar from "./components/NavBar";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "anime gril thing",
	description: "i have no agency in my life",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${barlow.className} flex h-screen`}>
				<NavBar />
				<main className="flex flex-col grow-4 basis-0 p-4 items-center overflow-y-scroll bg-neutral-900">
					{children}
				</main>
			</body>
		</html>
	);
}
