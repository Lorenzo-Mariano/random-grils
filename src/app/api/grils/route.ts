import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
	const listResponse = await list();
	return NextResponse.json(listResponse);
}
