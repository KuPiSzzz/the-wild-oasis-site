"use server";
import { signIn, signOut } from "../_lib/auth-client";

export async function signInAction() {
  await signIn("google", { callbackUrl: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
