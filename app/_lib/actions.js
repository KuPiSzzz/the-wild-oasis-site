"use server";
import { signIn } from "../_lib/auth-client";

export async function signInAction() {
  await signIn("google", { callbackUrl: "/account" });
}
