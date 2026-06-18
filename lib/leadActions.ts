import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function updateLead(
  leadId: string,
  data: Record<string, any>
) {
  await updateDoc(
    doc(db, "enquires", leadId),
    data
  );
}