import { AuthenticationProvider, SocialLinkTypes } from "../..";
import { Model } from "../model";
export type User = {
    naming: {
        first: string;
        last: string;
    };
    email: string;
    roles: {
        founder?: boolean | null;
        investor?: boolean | null;
    };
    photoUrl: string | null | undefined;
    eid?: string;
    gptCredits?: number | null;
    slots?: number | null;
    dealroomSlots?: number | null;
    phone: string | null | undefined;
    security: {
        emailVerified: boolean;
        phoneVerified: boolean;
        authProvider: AuthenticationProvider;
    };
    bio?: {
        socials: {
            provider: SocialLinkTypes;
            link?: string;
        }[];
        about?: string | null;
        miniBio?: string | null;
    } | null;
    joined: Date | null | string | number;
    lastSeen?: Date | null | string | number;
    id: string;
};
export declare class UserModel extends Model<User> {
    get accountIsValid(): boolean;
    get fullname(): string;
}
