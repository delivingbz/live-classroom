import { cookies } from "next/headers";
import { db } from "@/src/prisma/db";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const sessionId = cookieStore.get("session")?.value;

  console.log("Session cookie:", sessionId);

  if (!sessionId) {
    console.log("No session cookie found.");
    return null;
  }

  const session = await db.orm.public.Session.first({
    id: sessionId,
  });

  console.log("Session found:", session);

  if (!session) {
    console.log("No session found in database.");
    return null;
  }

  if (new Date(session.expiresAt) < new Date()) {
    console.log("Session has expired.");
    return null;
  }

  const user = await db.orm.public.User.first({
    id: session.userId,
  });

  console.log("User found:", user);

  if (!user) {
    console.log("No user found for session.");
    return null;
  }

  return user;
}