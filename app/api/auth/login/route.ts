import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { cookies } from "next/headers";
import { db } from "@/src/prisma/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;
    const user = await db.orm.public.User.first({ email });
    if (!user) {
  return NextResponse.json(
    { error: "No account found with this email." },
    { status: 404 }
  );
}
const passwordMatch = await bcrypt.compare(
  password,
  user.passwordHash
);

if (!passwordMatch) {
  return NextResponse.json(
    { error: "Invalid email or password." },
    { status: 401 }
  );
}

const sessionId = crypto.randomBytes(32).toString("hex");

const expiresAt = new Date(
  Date.now() + 1000 * 60 * 60 * 24 * 7
).toISOString();

const session = await db.orm.public.Session.create({
  id: sessionId,
  userId: user.id,
  expiresAt,
});

const cookieStore = await cookies();

cookieStore.set("session", sessionId, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  expires: new Date(expiresAt),
  path: "/",
});

//console.log("Session cookie set:", sessionId);

console.log("Login attempt:", email);

return NextResponse.json({
  message: "Login successful.",
});
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}