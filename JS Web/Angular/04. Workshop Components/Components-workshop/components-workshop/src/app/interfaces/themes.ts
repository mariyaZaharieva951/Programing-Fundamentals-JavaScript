import { Post } from "./posts";
import { UserId } from "./userId";

export interface Theme {
    subscribers: string[],
    posts: any,
    _id: string,
    themeName: string,
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
  }