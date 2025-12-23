import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const uid = user.id;
  const email = user.emailAddresses?.[0]?.emailAddress ?? null;

  const docRef = adminDb.collection("users").doc(uid);
  const snap = await docRef.get();

  if (!snap.exists) {
    await docRef.set(
      {
        uid,
        email,
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        imageUrl: user.imageUrl ?? null,
        role: "reader",
        isVerifiedJournalist: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

    return NextResponse.json({ ok: true, created: true, uid });
  }

  await docRef.set(
    {
      email,
      firstName: user.firstName ?? null,
      lastName: user.lastName ?? null,
      imageUrl: user.imageUrl ?? null,
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );

  return NextResponse.json({ ok: true, created: false, uid });
}
