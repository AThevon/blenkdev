import { NextResponse } from "next/server";

export async function GET() {
   return NextResponse.json({
      url: "https://prod.spline.design/paCAePhrCCbSnWIr/scene.splinecode",
   });
}
