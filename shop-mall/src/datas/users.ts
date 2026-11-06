
import type {User} from "../types/user"

// 임시 데이터
export const initialUsers: User[] = [
  { id: 1, username: "admin", password: "a1234567", name: "관리자", email: "admin@spaceshop.com", role: "admin" },
  { id: 2, username: "hong123", password: "h1234567", name: "홍길동", email: "hong@example.com", role: "user" },
  { id: 3, username: "park123", password: "p1234567", name: "박상희", email: "kim@example.com", role: "user" },
  { id: 4, username: "ko123", password: "k1234567", name: "고담덕", email: "lee@example.com", role: "user" },
];