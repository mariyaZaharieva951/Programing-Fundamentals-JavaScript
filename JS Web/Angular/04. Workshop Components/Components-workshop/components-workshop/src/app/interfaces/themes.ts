import { UserId } from "./user";

export interface themes {
    subscribers: string[],
    posts: string[],
    _id: string,
    themeName: string,
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
  }