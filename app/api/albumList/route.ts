import { NextRequest, NextResponse } from "next/server";
import { likedAlbums } from "@/lib/placeholder-data";

export async function GET(req: NextRequest) {
  return new NextResponse(JSON.stringify(likedAlbums));
}
