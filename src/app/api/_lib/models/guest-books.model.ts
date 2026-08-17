import { RoleGuestBookType } from "@/types/role-guest-book.type"

export interface guestBooksCreateRequest {
    name: string
    role: RoleGuestBookType
    message: string
    is_pinned?: boolean
}