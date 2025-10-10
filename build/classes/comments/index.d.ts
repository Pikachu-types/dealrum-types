import { DocumentSchema } from "../../types";
import { Model } from "../model";
export type Comment = {
    authorName: string;
    author: string;
    company: string;
    parentRef: string;
    authorAvatarUrl?: string;
    content: string;
} & DocumentSchema;
export declare class CommentModel extends Model<Comment> {
}
