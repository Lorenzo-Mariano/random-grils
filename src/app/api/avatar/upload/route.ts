import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
	const { searchParams } = new URL(request.url);
	const filename = searchParams.get("filename");

	if (!filename || !request.body) {
		return NextResponse.json(
			{ error: "A file is required blablabla" },
			{ status: 400 }
		);
	}

	const blob = await put(filename, request.body, {
		access: "public",
	});

	revalidatePath("/");
	return NextResponse.json(blob);
}
