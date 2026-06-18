"use client";

import {
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
User,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export async function loginAdmin(
email: string,
password: string
) {
return signInWithEmailAndPassword(
auth,
email,
password
);
}

export async function logoutAdmin() {
return signOut(auth);
}

export function observeAuth(
callback: (user: User | null) => void
) {
return onAuthStateChanged(
auth,
callback
);
}
