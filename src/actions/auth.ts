"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { buildToken } from "@/lib/auth-token";

export async function login(formData: FormData) {
  const username = (formData.get("username") as string).trim();
  const password = formData.get("password") as string;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (
    !adminUsername ||
    !adminPassword ||
    username !== adminUsername ||
    password !== adminPassword
  ) {
    return { error: "Invalid username or password." };
  }

  const token = buildToken(adminUsername, adminPassword);
  const cookieStore = await cookies();
  cookieStore.set("admin_auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");
  redirect("/login");
}
