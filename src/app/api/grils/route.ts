import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const listResponse = await list({
    prefix: "random-grils/"
  });

  // when adding a prefix, first item in list
  // always seems to be the folder itself.
  listResponse.blobs.shift();

  console.log("listResponse", listResponse);
  return NextResponse.json(listResponse);
}
