import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// model GuestbookEntry {
//   id        String   @id @default(cuid())
//   name      String   @db.VarChar(100)
//   role      String   @db.VarChar(50)   // e.g. 'warga', 'perangkat_desa', 'mahasiswa_kkn'
//   message   String   @db.Text
//   isApproved Boolean @default(true)    // Berguna jika nanti butuh moderasi konten
//   createdAt DateTime @default(now())   @map("created_at")
//   updatedAt DateTime @updatedAt        @map("updated_at")

//   @@map("guestbook_entries")
// }