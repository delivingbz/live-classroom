import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/src/prisma/db";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const sessionId = cookieStore.get("session")?.value;

    if (!sessionId) {
      return NextResponse.json(
        { error: "No active session." },
        { status: 401 }
      );
    }
    //console.log("Logging out session:", sessionId);
   await db.orm.public.Session
  .where({ id: sessionId })
  .delete();

    cookieStore.delete("session");

    return NextResponse.json({
      message: "Logout successful.",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}