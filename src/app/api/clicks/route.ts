import { NextRequest, NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (typeof linkId !== "string" || linkId.length === 0) {
    return NextResponse.json({ error: "linkId가 필요합니다." }, { status: 400 });
  }

  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ linkId, count: result?.count ?? 1 });
}
